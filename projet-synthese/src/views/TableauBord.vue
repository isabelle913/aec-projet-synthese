<template>
  <section class="page-background page-padding flex flex-col gap-y-16">
    <ApercuRapide :count-internship-requests="countInternshipRequests" :count-internship-offers="countInternshipOffers" :count-candidats="howManyCandidates" />
    <ListeBase v-if="internshipRequestsFiltered.length > 0" :liste-items="internshipRequestsFiltered" is-demande is-tableaubord />
    <ListeBase v-if="internshipOffersFiltered.length > 0" :liste-items="internshipOffersFiltered" is-tableaubord />
  </section>
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
const { candidatesListeCount, getCandidateCount } = CandidatesService();

const internshipRequests = ref([]);
const internshipRequestsFiltered = ref([]);
const howManyInternshipRequest = 5;
const internshipOffers = ref([]);
const internshipOffersFiltered = ref([]);
const howManyInternshipOffers = 5;
const howManyCandidates = ref(0);

const countInternshipRequests = computed(() => internshipRequests.value.length);
const countInternshipOffers = computed(() => internshipOffers.value.length);

const isLoading = ref(true);

onMounted(() => {
  allInternshipRequests();
  allInternshipOffers();
  getCandidateCount();
});

watchEffect(() => {
  if (Array.isArray(internshipRequestsListe.value)) {
    internshipRequests.value = [...internshipRequestsListe.value];
    // console.log("Requests", internshipRequests.value);
    isLoading.value = false;

    let count = 1;
    internshipRequestsFiltered.value = [];
    internshipRequestsListe.value.map((request) => {
      if (!request.isActive && count <= howManyInternshipRequest) {
        internshipRequestsFiltered.value.push(request);
        count += 1;
      }
    });
  }
});

watchEffect(() => {
  if (Array.isArray(internshipOffersListe.value)) {
    internshipOffers.value = [...internshipOffersListe.value];
    // console.log("Offers", internshipOffers.value);
    isLoading.value = false;

    let count = 1;
    internshipOffersFiltered.value = [];
    internshipOffersListe.value.map((request) => {
      if (!request.isActive && count <= howManyInternshipOffers) {
        internshipOffersFiltered.value.push(request);
        count += 1;
      }
    });
  }
});

watchEffect(() => {
  if (candidatesListeCount.value) {
    // console.log("ICI", candidatesListeCount.value);
    howManyCandidates.value = candidatesListeCount.value;
  }
});
</script>

<style scoped></style>
