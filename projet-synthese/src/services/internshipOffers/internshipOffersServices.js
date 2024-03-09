import { ref } from "vue";

export default function getAllInternshipOffers() {
  const liste = ref([]);

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

  return {
    liste,
    allInternshipOffers,
  };
}