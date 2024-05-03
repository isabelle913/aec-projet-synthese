import { ref } from "vue";

export default function ProvinceService() {
  const provincesListe = ref([]);
  const objet = ref({});

  const allProvinces = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/provinces/");
      const data = await response.json();
      provincesListe.value = data;
      return provincesListe.value;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
      throw error;
    }
  };

  const getProvinceById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/provinces/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        objet.value = data;
        // console.log("Province trouvée :", objet.value);
        return objet.value;
      })
      .catch((error) => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  return {
    provincesListe,
    allProvinces,
    getProvinceById,
  };
}
