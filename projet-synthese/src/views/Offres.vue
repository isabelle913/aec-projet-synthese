<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12 h-screen">
    <div class="column">
      <!-- TODO polices -->
      <div class="my-12 text-6xl">Offres de stage</div>
      <!-- TODO  couleur et mettre hover plus foncé -->
      <BtnBase title="Ajouter un offre de stage" color="red" :action="AddOffer" />
    </div>

    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" @update-data="updateData" />
  </div>
  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
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
  console.log("Ajouter un offre de stage");
  // TODO OFFRE décommenter lorsque offre prêt
  // router.push({ name: "offre", params: { id:'new' } });
}

function updateData() {
  setTimeout(() => {
    location.reload();
  }, 1500);
}

onMounted(() => {
  console.log("onMounted Offres");
  allInternshipOffers();
});

watchEffect(() => {
  if (Array.isArray(internshipOffersListe.value)) {
    internshipOffers.value = [...internshipOffersListe.value];
    console.log("Offers ICI", internshipOffers.value);
    isLoading.value = false;
  }
});

// TODO mettre loader
</script>
<style scoped>
/* TODO page-padding */
.page-padding {
  padding: 3rem;
}
</style>
