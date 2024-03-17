import { ref } from "vue";

export function useEnterpriseServices(){

    function getEnterprises(){
        const liste = ref([]);

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
    }

    return { getEnterprises }
}