import { ref } from "vue";

export default function InternshipRequestsServices() {
  const liste = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allInternshipRequests = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-requests/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des demandes de stages:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  const getInternshipRequestById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-requests/${_id}`)
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

  const addInternshipRequest = async (newInternshipRequest) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/internship-requests/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInternshipRequest),
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
    allInternshipRequests,
    getInternshipRequestById,
    addInternshipRequest,
  };
}