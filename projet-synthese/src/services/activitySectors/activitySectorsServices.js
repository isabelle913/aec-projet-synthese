import { ref } from "vue";

export default function ActivityServices() {
  const activityListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allActivitySectors = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/activity-sectors/");
      const data = await response.json();
      activityListe.value = data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }
    return activityListe.value;
  };

  const getActivitySectorById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/activity-sectors/${_id}`)
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

  const addActivitySector = async (newActivitySector) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/activity-sectors/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivitySector),
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

  const editActivitySector = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/activity-sectors/${data._id}`, {
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

  const deleteActivitySector = async (_id) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/activity-sectors/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        success.value = true;
        // console.log("Requête DELETE réussie !");
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
    activityListe,
    objet,
    success,
    allActivitySectors,
    getActivitySectorById,
    addActivitySector,
    editActivitySector,
    deleteActivitySector,
  };
}
