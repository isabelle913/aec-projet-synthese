import { ref } from "vue";

export default function EnterpriseService() {
  const liste = ref([]);

  const allEnterprises = () => {
    fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des entreprises:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });

      return liste.value;
  };

  const success = ref(false);

  const addEnterprises = async (newEnterprises) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEnterprises),
      });

      if (response.ok) {
        success.value = true;
        console.log('Requête POST réussie !');
        // Vous pouvez ajouter ici d'autres actions après le succès de la requête.
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
    success,
    allEnterprises,
    addEnterprises,
  };
}