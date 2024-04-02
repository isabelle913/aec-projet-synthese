<template>
  <div class="container mx-auto">
    <div v-if="!isAuthenticated">
      <Authentificator @authenticated="onAuthenticated" />
    </div>
    <div v-else>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <MenuAction />
      </div>
      <!-- menu -->
      <div class="flex">
        <Navigation />
        <div class="w-3/4">
          <!-- Contenu de l'application -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import EnterpriseService from "./services/enterprises/enterprisesServices";
import ProvinceService from "./services/provinces/provincesServices";
import InternshipRequestsServices from "./services/internshipRequests/internshipRequestsServices";
import InternshipOffersService from "./services/internshipOffers/internshipOffersServices";
import CandidatesService from "./services/candidates/candidatesServices";
import ActivityServices from "./services/activitySectors/activitySectorsServices";
import InternshipTypesServices from "./services/internshipTypes/internshipTypesServices";

import Navigation from "./components/Navigation.vue";
import MenuAction from "./components/MenuAction.vue";
import Authentificator from "./components/Authentificator.vue";

const router = useRouter();
const isAuthenticated = ref(false);

const onAuthenticated = (value) => {
  console.log(value);
  isAuthenticated.value = true;
};




const { /*liste,*/ allEnterprises } = EnterpriseService();
const { /*liste,*/ allProvinces } = ProvinceService();
const { /*liste,*/ allInternshipRequests } = InternshipRequestsServices();
const { /*liste,*/ allInternshipOffers } = InternshipOffersService();
const { /*liste,*/ allCandidates } = CandidatesService();
const { /*liste,*/ allActivitySectors } = ActivityServices();
const { /*liste,*/ allInternshipTypes } = InternshipTypesServices();

onMounted(() => {
  // allEnterprises();
  // allProvinces();
  // allInternshipRequests();
  // allInternshipOffers();
  // allCandidates();
  // allActivitySectors();
  // allInternshipTypes();
});
</script>

<style scoped></style>
