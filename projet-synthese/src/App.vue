<template>
  <!-- TODO  Pense pas que tu puisse utiliser id='app' ici car c'est le ID principal de l'application voir fichier index.html ligne 14 -->
  <!-- <div id="app" > -->
  <div class="container mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center" v-if="isAuthenticated">
      <MenuAction />
    </div>
    <!-- menu -->
    <div class="flex">
      <Navigation v-if="isAuthenticated" />
      <!-- Ancien code <div class="col-span-12 md:col-span-8 bg-f6f6f6 variableSection"> -->
      <div class="flex-auto">
        <!-- TODO Je pense que ce sera à chacune des pages de mettre son background -->
        <router-view />
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

const router = useRouter();

// TODO modifier
const isAuthenticated = ref(true);

// TODO ce code donne une erreur
// onMounted(() => {
//   router.appContext.app.config.globalProperties.$app.on("authenticated", () => {
//     isAuthenticated.value = true;
//   });
// });
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
