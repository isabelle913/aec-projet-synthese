import { ref } from "vue";

export default function InternshipTypesServices() {
  const internshipTypesListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allInternshipTypes = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-types/")
      .then((response) => response.json())
      .then((data) => {
        internshipTypesListe.value = data;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
    return internshipTypesListe.value;
  };

  const getInternshipTypeById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-types/${_id}`)
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

  const addInternshipType = async (newInternshipType) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/internship-types/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInternshipType),
      });

      if (response.ok) {
        success.value = true;
        // console.log('Requête POST réussie !');
      } else {
        console.error("Échec de la requête POST.");
        success.value = false;
      }
    } catch (error) {
      console.error("Erreur lors de la requête POST:", error);
      success.value = false;
    }
  };

  const editInternshipType = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-types/${data._id}`, {
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

  const deleteInternshipType = async (_id) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-types/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête DELETE réussie !");
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
    internshipTypesListe,
    objet,
    success,
    allInternshipTypes,
    getInternshipTypeById,
    addInternshipType,
    editInternshipType,
    deleteInternshipType,
  };
}
