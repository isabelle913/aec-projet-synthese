import { ref } from "vue";

export default function CandidatesService() {
  const liste = ref([]);

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

  const success = ref(false);

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
    success,
    allCandidates,
    addCandidates,
  };
}