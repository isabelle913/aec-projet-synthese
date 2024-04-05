import { ref } from "vue";
import { useRouter } from "vue-router";

export default function EnterpriseService() {
  const enterpriseListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const router = useRouter();

  const allEnterprises = () => {
    return fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/")
      .then((response) => response.json())
      .then((data) => {
        enterpriseListe.value = data;
        return enterpriseListe.value;
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const getEntrepriseById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/enterprises/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        objet.value = data;
        return objet.value;
      })
      .catch((error) => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addEnterprises = async (newEnterprise) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEnterprise),
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête POST réussie !");
      } else {
        console.error("Échec de la requête POST.");
        success.value = false;
      }
    } catch (error) {
      console.error("Erreur lors de la requête POST:", error);
      success.value = false;
    }
  };

  const editEnterprises = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/enterprises/${data._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête PATCH réussie !");
      } else {
        console.error("Échec de la requête PATCH.");
        success.value = false;
      }
    } catch (error) {
      console.log("Échec de la requête PATCH:", error);
    }
  };

  const deleteEnterprise = async (_id) => {
    // console.log("deleteEnterprise", _id);
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/enterprises/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête DELETE réussie !");
        allEnterprises();
      } else {
        console.error("Échec de la requête DELETE.");
        success.value = false;
      }
    } catch (error) {
      console.error("Erreur lors de la requête DELETE:", error);
      success.value = false;
    }
  };

  return {
    enterpriseListe,
    objet,
    success,
    allEnterprises,
    getEntrepriseById,
    addEnterprises,
    editEnterprises,
    deleteEnterprise,
  };
}
