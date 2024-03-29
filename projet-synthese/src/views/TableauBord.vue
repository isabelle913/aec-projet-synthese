<template>
  <section class="bg-slate-100 page-padding">
    <ApercuRapide :count-internship-requests="countInternshipRequests" :count-internship-offers="countInternshipOffers" />
    <ListeBase v-if="internshipRequestsFiltered.length > 0" :liste-items="internshipRequestsFiltered" is-demande is-tableaubord />
    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" is-tableaubord />
  </div>
  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";
import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";
import CandidatesService from "@/services/candidates/candidatesServices";

import ApercuRapide from "@/components/ApercuRapide.vue";
import ListeBase from "@/components/ListeBase.vue";
import Loader from "@/components/Loader.vue";

const { internshipRequestsListe, allInternshipRequests } = InternshipRequestsServices();
const { internshipOffersListe, allInternshipOffers } = InternshipOffersService();
const { allCandidates } = CandidatesService();

const internshipRequests = ref([]);
const internshipRequestsFiltered = ref([]);
const howManyInternshipRequest = 5;
const internshipOffers = ref([]);
const internshipOffersFiltered = ref([]);
const howManyInternshipOffers = 5;

const countInternshipRequests = computed(() => internshipRequests.value.length);
const countInternshipOffers = computed(() => internshipOffers.value.length);

const isLoading = ref(true);

onMounted(() => {
  allInternshipRequests();
  allInternshipOffers();
  allCandidates();
});

watchEffect(() => {
  if (Array.isArray(internshipRequestsListe.value)) {
    internshipRequests.value = [...internshipRequestsListe.value];
    // console.log("Requests", internshipRequests.value);
    isLoading.value = false;

    let count = 1;
    internshipRequestsListe.value.map((request) => {
      // TODO Affiche seulement les demandes inactives
      if (request.isActive && count <= howManyInternshipRequest) {
        internshipRequestsFiltered.value.push(request);
        count += 1;
      }
    });
  }
});
// TODO écouter enregistrement du cours
// TODO Alex Candidats Ajouter count STP
watchEffect(() => {
  if (Array.isArray(internshipOffersListe.value)) {
    internshipOffers.value = [...internshipOffersListe.value];
    // console.log("Offers", internshipOffers.value);
    isLoading.value = false;

    let count = 1;
    internshipOffersListe.value.map((request) => {
      // TODO Affiche seulement les demandes inactives
      if (request.isActive && count <= howManyInternshipOffers) {
        internshipOffersFiltered.value.push(request);
        count += 1;
      }
    });
  }
});
</script>
<style scoped>
.page-padding {
  padding: 3rem;
}
</style>
