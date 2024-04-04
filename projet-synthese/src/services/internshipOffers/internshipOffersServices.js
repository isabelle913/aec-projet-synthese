import { ref } from "vue";

export default function InternshipOffersService() {
  const internshipOffersListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allInternshipOffers = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-offers/")
      .then((response) => response.json())
      .then((data) => {
        internshipOffersListe.value = data;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
    return internshipOffersListe.value;
  };

  const getInternshipOffereById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-offers/${_id}`)
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

  const addInternshipOffer = async (newInternshipOffer) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/internship-offers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInternshipOffer),
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

  const editInternshipOffer = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-offers/${data._id}`, {
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

  const deleteInternshipOffer = async (_id) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/internship-offers/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête DELETE réussie !");
        allInternshipOffers();
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
    internshipOffersListe,
    objet,
    success,
    allInternshipOffers,
    getInternshipOffereById,
    addInternshipOffer,
    editInternshipOffer,
    deleteInternshipOffer,
  };
}
