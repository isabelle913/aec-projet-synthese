<template>
  <div class="page-background page-padding flex flex-col gap-y-12">
    <div>
      <h2>Offres de stage</h2>
      <BtnBase class="mb-12 mt-20" title="Ajouter une offre de stage" btn-class="btn-offrestage" :action="AddOffer" />
    </div>

    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" />
  </div>
  <!-- <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport> -->
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";

import ListeBase from "@/components/ListeBase.vue";
import Loader from "@/components/Loader.vue";
import BtnBase from "@/components/BtnBase.vue";

const { internshipOffersListe, allInternshipOffers } = InternshipOffersService();
const router = useRouter();

const internshipOffers = ref([]);

const isLoading = ref(true);

function AddOffer(e) {
  e.preventDefault();
  router.push({ name: "OffredeStageAjout", params: { id: "new" } });
}

onMounted(() => {
  allInternshipOffers();
});

watchEffect(() => {
  if (Array.isArray(internshipOffersListe.value)) {
    internshipOffers.value = [...internshipOffersListe.value];
    // console.log("Offers", internshipOffers.value);
    isLoading.value = false;
  }
});
</script>
<style scoped></style>
