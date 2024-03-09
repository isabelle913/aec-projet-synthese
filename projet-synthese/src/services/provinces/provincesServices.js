import { ref } from "vue";

export default function getAllProvinces() {
  const liste = ref([]);

  const allProvinces = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/provinces/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des provinces:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  return {
    liste,
    allProvinces,
  };
}