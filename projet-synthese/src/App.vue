<template>
  <div class="container mx-auto">
    <!-- Header -->
    <!-- menu -->
    <!-- <RouterView /> -->
    <p class="flex justify-center items-center text-3xl h-screen">Bonjour super team</p>
    <!-- Footer -->
  </div>
</template>

<script setup>

/*Section test pour les services.*/

import { ref, onMounted, watchEffect } from 'vue';

import getAllEnterprises from './services/enterprises/enterprisesServices';
import getAllProvinces from './services/provinces/provincesServices';
import getAllInternshipRequests from './services/internshipRequests/internshipRequestsServices';
import getAllInternshipOffers from './services/internshipOffers/internshipOffersServices';
import getAllCandidates from './services/candidates/candidatesServices';
import getAllActivitySectors from './services/activitySectors/activitySectorsServices';
import getAllInternshipTypes from './services/internshipTypes/internshipTypesServices';

const {/*liste,*/ allEnterprises} = getAllEnterprises();
const {/*liste,*/ allProvinces} = getAllProvinces();
const {/*liste,*/ allInternshipRequests} = getAllInternshipRequests();
const {/*liste,*/ allInternshipOffers} = getAllInternshipOffers();
const {/*liste,*/ allCandidates} = getAllCandidates();
const {/*liste,*/ allActivitySectors} = getAllActivitySectors();
const {/*liste,*/ allInternshipTypes} = getAllInternshipTypes();

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