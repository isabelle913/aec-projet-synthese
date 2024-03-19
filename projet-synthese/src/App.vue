<template>
  <div class="container mx-auto">
    <!-- Header -->
    <!-- menu -->
    <RouterView />
    <!--<p class="flex justify-center items-center text-3xl h-screen">Bonjour super team</p>-->
    <!--<BidonForm_2 />-->
    <!-- Footer -->
  </div>
</template>

<script setup>
/*Section test pour les services.*/

import BidonForm_2 from "@/views/BidonForm_2.vue";

import { ref, onMounted, watchEffect } from "vue";

import EnterpriseService from "./services/enterprises/enterprisesServices";
import ProvinceService from "./services/provinces/provincesServices";
import InternshipRequestsServices from "./services/internshipRequests/internshipRequestsServices";
import InternshipOffersService from "./services/internshipOffers/internshipOffersServices";
import CandidatesService from "./services/candidates/candidatesServices";
import ActivityServices from "./services/activitySectors/activitySectorsServices";
import InternshipTypesServices from "./services/internshipTypes/internshipTypesServices";

const { /*liste,*/ allEnterprises } = EnterpriseService();
const { /*liste,*/ allProvinces } = ProvinceService();
const { /*liste,*/ allInternshipRequests } = InternshipRequestsServices();
const { /*liste,*/ allInternshipOffers } = InternshipOffersService();
const { /*liste,*/ allCandidates } = CandidatesService();
const { /*liste,*/ allActivitySectors } = ActivityServices();
const { /*liste,*/ allInternshipTypes } = InternshipTypesServices();

onMounted(() => {
  /*allEnterprises();
  allProvinces();
  allInternshipRequests();
  allInternshipOffers();
  allCandidates();
  allActivitySectors();
  allInternshipTypes();*/
});
</script>

<style scoped></style>
