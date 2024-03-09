import { ref } from "vue";

export default function getAllCandidates() {
  const liste = ref([]);

  const allCandidates = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/candidates/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des candidats:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  return {
    liste,
    allCandidates,
  };
}