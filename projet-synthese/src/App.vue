<template>
  <div class="grid grid-cols-12 gap-5 my-8 container">
    <div class="col-span-12 md:col-span-2 max-md:p-10 my-4 pb-96 bg-slate-200">
      <Navigation />
    </div>
    <div class="col-span-12 md:col-span-10 max-md:p-10 my-4 bg-red-300">
      <div class="col-span-12 md:col-span-8 max-md:p-10 py-5 mb-10 bg-slate-300">
        <MenuAction />
      </div>
      <div class="col-span-12 md:col-span-8 max-md:p-10 p-16 bg-slate-300 variableSection">
        <router-view :identification="identification" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*Section test pour les services.*/

import { ref, onMounted, watchEffect } from "vue";

import Navigation from "./components/Navigation.vue";
import MenuAction from "./components/MenuAction.vue";

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
  allEnterprises();
  allProvinces();
  allInternshipRequests();
  allInternshipOffers();
  allCandidates();
  allActivitySectors();
  allInternshipTypes();
});
</script>

<style scoped></style>
