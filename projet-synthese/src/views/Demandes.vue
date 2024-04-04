<template>
  <div class="page-background page-padding flex flex-col gap-y-12">
    <div>
      <h2>Demandes de stage</h2>
      <BtnBase class="mb-12 mt-20" title="Ajouter une demandes de stage" btn-class="btn-stage" :action="AddRequest" />
    </div>
    <ListeBase v-if="internshipRequests.length > 0" :liste-items="internshipRequests" is-demande />
  </div>
  <!-- <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport> -->
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

import ListeBase from "@/components/ListeBase.vue";
import Loader from "@/components/Loader.vue";
import BtnBase from "@/components/BtnBase.vue";

const { internshipRequestsListe, allInternshipRequests } = InternshipRequestsServices();
const router = useRouter();

const internshipRequests = ref([]);

const isLoading = ref(true);

function AddRequest(e) {
  e.preventDefault();
  router.push({ name: "ajoutdemandestage" });
}

onMounted(() => {
  allInternshipRequests();
});

watchEffect(() => {
  if (Array.isArray(internshipRequestsListe.value)) {
    internshipRequests.value = [...internshipRequestsListe.value];
    // console.log("Requests", internshipRequests.value);
    isLoading.value = false;
  }
});
</script>

<style scoped></style>
