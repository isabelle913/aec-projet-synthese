import { ref } from "vue";

export default function InternshipRequestsServices() {
  const internshipRequestsListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allInternshipRequests = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-requests/")
      .then((response) => response.json())
      .then((data) => {
        internshipRequestsListe.value = data;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
    return internshipRequestsListe.value;
  };

  const getInternshipRequestById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-requests/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        objet.value = data;
        return objet.value;
      })
      .catch((error) => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addInternshipRequest = async (newInternshipRequest) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/internship-requests/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInternshipRequest),
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête POST réussie !");
      } else {
        console.error("Échec de la requête POST.");
        success.value = false;
      }
    } catch (error) {
      console.error("Erreur lors de la requête POST:", error);
      success.value = false;
    }
  };

  const editInternshipRequest = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-requests/${data._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête PATCH réussie !");
      } else {
        console.error("Échec de la requête PATCH.");
        success.value = false;
      }
    } catch (error) {
      console.log("Échec de la requête PATCH:", error);
    }
  };

  const deleteInternshipRequest = async (_id) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-requests/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête DELETE réussie !");
        allInternshipRequests();
      } else {
        console.error("Échec de la requête DELETE.");
        success.value = false;
      }
    } catch (error) {
      console.error("Erreur lors de la requête DELETE:", error);
      success.value = false;
    }
  };

  return {
    internshipRequestsListe,
    objet,
    success,
    allInternshipRequests,
    getInternshipRequestById,
    addInternshipRequest,
    editInternshipRequest,
    deleteInternshipRequest,
  };
}
