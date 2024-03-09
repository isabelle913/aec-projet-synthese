import { ref } from "vue";

export default function getAllInternshipRequests() {
  const liste = ref([]);

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

  return {
    liste,
    allInternshipRequests,
  };
}