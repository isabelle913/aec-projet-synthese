import { ref } from "vue";

export default function getAllInternshipTypes() {
  const liste = ref([]);

  const allInternshipTypes = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/internship-types/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des types de stage:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  return {
    liste,
    allInternshipTypes,
  };
}