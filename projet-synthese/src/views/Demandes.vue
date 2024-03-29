<template>
  <div class="bg-slate-100 page-padding flex flex-col gap-y-12 h-screen">
    <div class="column">
      <!-- TODO polices -->
      <div class="my-12 text-6xl">Demandes de stage</div>
      <!-- TODO  couleur et mettre hover plus foncé -->
      <BtnBase title="Ajouter une demandes de stage" color="green" :action="AddRequest" />
    </div>

    <ListeBase v-if="internshipRequests.length > 0" :liste-items="internshipRequests" @update-data="updateData" is-demande />
  </div>
  <teleport to="body">
    <!-- <Loader v-model="isLoading" /> -->
    <!-- // TODO mettre loader -->
  </teleport>
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

function updateData() {
  setTimeout(() => {
    console.log("updateData from demandes Liste");
    location.reload();
  }, 1500);
}

onMounted(() => {
  console.log("onMounted Demandes");
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

<style scoped>
/* TODO page-padding */
.page-padding {
  padding: 3rem;
}
</style>
