import { ref } from "vue";

export default function getAllActivitySectors() {
  const liste = ref([]);

  const allActivitySectors = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/activity-sectors/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des secteurs d\'activités:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  return {
    liste,
    allActivitySectors,
  };
}