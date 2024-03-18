import { ref } from "vue";

export default function InternshipOffersService() {
  const liste = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allInternshipOffers = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-offers/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des offres de stages:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  const getInternshipOffereById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-offers/${_id}`)
      .then(response => response.json())
      .then(data => {
        objet.value = data;
        console.log('Entreprise trouvée :', objet.value);
        return objet.value;
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addInternshipOffer = async (newInternshipOffer) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInternshipOffer),
      });

      if (response.ok) {
        success.value = true;
        console.log('Requête POST réussie !');
        // Vous pouvez ajouter ici d'autres actions après le succès de la requête.
      } else {
        console.error('Échec de la requête POST.');
        success.value = false;
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST:', error);
      success.value = false;
    }
  };

  return {
    liste,
    objet,
    success,
    allInternshipOffers,
    getInternshipOffereById,
    addInternshipOffer,
  };
}