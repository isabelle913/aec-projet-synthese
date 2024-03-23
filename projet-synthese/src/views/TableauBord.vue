<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12">
    <ApercuRapide :count-internship-requests="countInternshipRequests" :count-internship-offers="countInternshipOffers" />
    <ListeBase v-if="internshipRequests.length > 0" is-demande :liste-items="internshipRequests" />
    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";
import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";

import ApercuRapide from "@/components/ApercuRapide.vue";
import ListeBase from "@/components/ListeBase.vue";

const { listeRequest, allInternshipRequests } = InternshipRequestsServices();
const { listeOffers, allInternshipOffers } = InternshipOffersService();

const internshipRequests = ref([]);
const internshipOffers = ref([]); // TODO corriger les propriétés reçus

const countInternshipRequests = computed(() => internshipRequests.value.length);
const countInternshipOffers = computed(() => internshipOffers.value.length);

// TODO obtenir un count des candidats

onMounted(() => {
  allInternshipRequests();
  allInternshipOffers();
});

watchEffect(() => {
  if (Array.isArray(listeRequest.value)) {
    internshipRequests.value = [...listeRequest.value];
    console.log("Request", internshipRequests.value);
  }
});
watchEffect(() => {
  if (Array.isArray(listeOffers.value)) {
    internshipOffers.value = [...listeOffers.value];
    console.log("Offers", internshipOffers.value);
  }
});
</script>
<style scoped>
.page-padding {
  padding: 3rem;
}
</style>
