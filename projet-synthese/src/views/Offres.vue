<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12">
    <!-- TODO Ajouter bouton ajouter -->
    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" />
  </div>
  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";

import ListeBase from "@/components/ListeBase.vue";
import Loader from "@/components/Loader.vue";

const { internshipOffersListe, allInternshipOffers } = InternshipOffersService();

const internshipOffers = ref([]);

const isLoading = ref(true);

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
<style scoped>
/* TODO page-padding */
.page-padding {
  padding: 3rem;
}
</style>
