import { ref } from "vue";

export default function ProvinceService() {
  const provincesListe = ref([]);

  const allProvinces = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/provinces/");
      const data = await response.json();
      provincesListe.value = data;
      console.log('Liste des provinces:', provincesListe.value);
      return provincesListe.value; // Retourne les données récupérées
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
      throw error; // Rejette la promesse en cas d'erreur
    }
  };

  return {
    provincesListe,
    allProvinces,
  };
}