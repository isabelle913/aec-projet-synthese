<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12">
    <ApercuRapide :count-internship-requests="countInternshipRequests" :count-internship-offers="countInternshipOffers" />
    <ListeBase v-if="internshipRequestsFiltered.length > 0" is-demande :liste-items="internshipRequestsFiltered" />
    <ListeBase v-if="internshipOffers.length > 0" :liste-items="internshipOffers" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";
import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";

import ApercuRapide from "@/components/ApercuRapide.vue";
import ListeBase from "@/components/ListeBase.vue";

const { internshipRequestsListe, allInternshipRequests } = InternshipRequestsServices();
const { internshipOffersListe, allInternshipOffers } = InternshipOffersService();

const internshipRequests = ref([]);
const internshipRequestsFiltered = ref([]);
const howManyInternshipRequest = 5;
const internshipOffers = ref([]);
const internshipOffersFiltered = ref([]);
const howManyInternshipOffers = 5;

const countInternshipRequests = computed(() => internshipRequests.value.length);
const countInternshipOffers = computed(() => internshipOffers.value.length);

// TODO obtenir un count des candidats
// TODO mettre loader

onMounted(() => {
  allInternshipRequests();
  allInternshipOffers();
});

watchEffect(() => {
  if (Array.isArray(internshipRequestsListe.value)) {
    internshipRequests.value = [...internshipRequestsListe.value];
    // console.log("Requests", internshipRequests.value);

    let count = 1;
    internshipRequestsListe.value.map((request) => {
      if (request.isActive && count <= howManyInternshipRequest) {
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

    let count = 1;
    internshipOffersListe.value.map((request) => {
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
