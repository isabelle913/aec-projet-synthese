import { ref } from "vue";

export default function InternshipTypesServices() {
  const liste = ref([]);
  const objet = ref({});
  const success = ref(false);

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

  const getInternshipTypeById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/internship-types/${_id}`)
      .then(response => response.json())
      .then(data => {
        objet.value = data;
        console.log('Entreprise trouvée :', objet.value);
        return objet.value;
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const addInternshipType = async (newInternshipType) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/internship-types/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInternshipType),
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
    objet,
    success,
    allInternshipTypes,
    getInternshipTypeById,
    addInternshipType,
  };
}