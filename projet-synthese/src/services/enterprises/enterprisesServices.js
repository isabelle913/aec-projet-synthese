import { ref } from "vue";

export default function EnterpriseService() {
  const enterpriseListe = ref([]);
  const objet = ref({});
  const success = ref(false);

  const allEnterprises = () => {
    return fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/")
      .then(response => response.json())
      .then(data => {
        enterpriseListe.value = data;
        console.log('Liste des entreprises:', enterpriseListe.value);
        return enterpriseListe.value;
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
        throw error;
      });
  };

  const getEntrepriseById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/enterprises/${_id}`)
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

  const addEnterprises = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/enterprises/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });

      console.log(body);

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

  const editEnterprises = async (_id) =>{
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/enterprises/${_id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
      });

      if(response.ok){
        success.value = true;
        console.log('Requête PATCH réussie !')
      } else{
        console.error('Échec de la requête PATCH:', error);
        success.value = false;
      }
    }catch(error){

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
  };
}