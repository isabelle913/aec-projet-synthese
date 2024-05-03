import { ref } from "vue";

export default function CandidatesService() {
  const candidatesListe = ref([]);
  const candidatesListeCount = ref();
  const objet = ref({});
  const success = ref(false);

  const allCandidates = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/candidates/");
      const data = await response.json();
      candidatesListe.value = data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }
    return candidatesListe.value;
  };

  const getCandidateCount = async () => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/candidates/count");
      const data = await response.json();
      candidatesListeCount.value = data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données:", error);
    }
    return candidatesListeCount.value;
  };

  const getCandidateById = (_id) => {
    return fetch(`https://aec-projet-integrateur-api.fly.dev/candidates/${_id}`)
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

  const addCandidates = async (newCandidates) => {
    try {
      const response = await fetch("https://aec-projet-integrateur-api.fly.dev/candidates/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCandidates),
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

  const editCandidates = async (data) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/candidates/${data._id}`, {
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

  const deleteCandidates = async (_id) => {
    try {
      const response = await fetch(`https://aec-projet-integrateur-api.fly.dev/candidates/${_id}`, {
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
    candidatesListe,
    candidatesListeCount,
    objet,
    success,
    allCandidates,
    getCandidateById,
    getCandidateCount,
    addCandidates,
    editCandidates,
    deleteCandidates,
  };
}
