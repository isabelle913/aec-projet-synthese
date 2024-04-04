<template>
  <section class="page-background page-padding">
    <h2>Candidats</h2>
    <BtnBase class="mb-12 mt-20" title="Ajouter un candidat" btn-class="btn-candidats" :action="onAddCandidat" />
    <div class="flex flex-wrap gap-6">
      <CardCandidat v-for="candidat in candidates" :key="candidat._id" :candidat="candidat" />
    </div>
  </section>
  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import BtnBase from "../components/BtnBase.vue";
import CardCandidat from "../components/CardCandidat.vue";
import Loader from "@/components/Loader.vue";

import CandidatesService from "../services/candidates/candidatesServices";

const router = useRouter();

const { candidatesListe, allCandidates } = CandidatesService();
const candidates = ref([]);

const isLoading = ref(true);

onMounted(() => {
  allCandidates();
});

watchEffect(() => {
  if (Array.isArray(candidatesListe.value)) {
    candidates.value = [...candidatesListe.value];
    isLoading.value = false;
  }
});

function onAddCandidat() {
  router.push({ name: "candidat", params: { id: "ajouter" } });
}
</script>
<style scoped>
</style>
