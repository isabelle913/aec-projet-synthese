import { ref } from "vue";

export default function ActivityServices() {
  const liste = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allActivitySectors = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/activity-sectors/");
      const data = await response.json();

      liste.value = data;
      console.log('Liste des secteurs d\'activités:', liste.value);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }

    return liste.value;
  };

  const getActivitySectorById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/activity-sectors/${_id}`)
      .then(response => response.json())
      .then(data => {
        objet.value = data;
        console.log('Secteurs d\'activité trouvée :', objet.value);
        return objet.value;
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addActivitySector = async (newActivitySector) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/activity-sectors/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivitySector),
      });

      if (response.ok) {
        success.value = true;
        console.log('Requête POST réussie !');
      } else {
        console.error('Échec de la requête POST.');
        success.value = false;
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST:', error);
      success.value = false;
    }
  };

  return {
    liste,
    objet,
    success,
    allActivitySectors,
    getActivitySectorById,
    addActivitySector,
  };
}