import { ref } from "vue";

export default function CandidatesService() {
  const liste = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allCandidates = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/candidates/");
      const data = await response.json();

      liste.value = data;
      console.log('Liste des candidats:', liste.value);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }

    return liste.value;
  };

  const getCandidateById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/candidates/${_id}`)
      .then(response => response.json())
      .then(data => {
        objet.value = data;
        console.log('Candidat trouvée :', objet.value);
        return objet.value;
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addCandidates = async (newCandidates) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/candidates/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCandidates),
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
    allCandidates,
    getCandidateById,
    addCandidates,
  };
}