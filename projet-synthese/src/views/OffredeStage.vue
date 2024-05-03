<template>
    <router-view />
    <div class="page-background page-padding flex flex-col gap-y-12">
    <div>
      <h2>Offres de stage</h2>
      <BtnBase class="mb-12 mt-20" title="Ajouter un offre de stage" btn-class="btn-offrestage" :action="AddOffer" />
    </div>
    

    <div class="shadow-md sm:rounded-lg mt-16 text-black-900">
      <table class="w-full text-sm text-left rtl:text-right ">
        <thead class="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Poste</th>
            <th scope="col" class="px-6 py-3">Type de stage</th>
            <th scope="col" class="px-6 py-3">Ville</th>
            <th scope="col" class="px-6 py-3">Date d'inscription</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="offre in internshipOffersListe" :key="offre._id" :offre="offre" class=" border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
              <p class="font-bold">{{ offre.title }}</p>
              <p>{{ offre.enterprise.name }}</p>
            </th>
            <td class="px-6 py-4">{{ offre.internshipType.value }}</td>
            <td class="px-6 py-4">{{ offre.province.value }}</td>
            <td class="px-6 py-4">{{ formatDate(offre.startDate) }}</td>
            <td class="px-6 py-4">
              <button @click="onDetails(offre._id)">
                <span class="pr-2 mdi mdi-eye-circle text-blue-600 text-lg mr-4">Afficher</span>
              </button>
              <button><span class="pr-2 mdi mdi-file-edit text-yellow-600 text-lg mr-4">Edit</span></button>
              <button><span class="pr-2 mdi mdi-delete-circle text-red-600 text-lg mr-4" @click="onOpenModalSuppression">Delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  
  </div>


    <teleport to="body">
      <ModalSuppression v-model="isOpenModalSuppression" :description="theModalSuppressionDescription" :action="onDelete" @close="isOpenModalSuppression = false" />
    </teleport>

  </template>
  
  <script setup>
  import { ref, onMounted, watchEffect, computed, defineProps } from "vue";
  import { useRouter } from "vue-router";
  import BtnBase from "@/components/BtnBase.vue";
  import ListeBase from "@/components/ListeBase.vue";
  import ModalSuppression from "../components/ModalSuppression.vue";
  import OffresService from "../services/internshipOffers/internshipOffersServices";
  
  const router = useRouter();
  
  const { internshipOffersListe, allInternshipOffers, deleteInternshipOffer } = OffresService();
  const offres = ref([]);
  
  onMounted(() => {
    allInternshipOffers();
  });
  
  function formatDate(value) {
    return new Date(value).toLocaleString();
  };
  
  function onDetails(idString) {
    router.push({ name: "OffredeStageDetail", params: { id: idString } });
  }
  
  watchEffect(() => {
    if (Array.isArray(internshipOffersListe.value)) {
      offres.value = [...internshipOffersListe.value];
      // console.log(internshipOffersListe.value);
    }
  });
  

  function AddOffer(e) {
  e.preventDefault();
  router.push({ name: "OffredeStageAjout", params: { id:'new' } });
}


  const offreToDelete = ref("");
  const isOpenModalSuppression = ref(false);
  
  const theModalSuppressionDescription = computed(() => {
    
    if (offreToDelete.value) {
    return offreToDelete.value.title;
  }
  return '';
   
  });
  
  function onOpenModalSuppression(e) {
    e.preventDefault();
   
    isOpenModalSuppression.value = true;
    
  }

  function onDelete() {
    deleteInternshipOffer(offreToDelete.value._id);
    isOpenModalSuppression.value = false;
  
}


  </script>
  
  <style></style>
  