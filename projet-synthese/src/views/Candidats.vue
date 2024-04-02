<template>
  <section class="bg-slate-100 page-padding">
    <h2>Candidats</h2>
    <BtnBase title="Ajouter un candidat" color="#9b5ba2" :action="onCandidatDetails" />
    <div class="flex flex-wrap gap-5">
      <CardCandidat v-for="candidate in candidates" :key="candidate._id" :candidate="candidate" />
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

const { candidatesListe, allCandidates} = CandidatesService();
const candidates = ref([]);

const isLoading = ref(true);

onMounted(() => {
  allCandidates();
});

watchEffect(() =>{
  if (Array.isArray(candidatesListe.value)){
    candidates.value = [...candidatesListe.value];
    console.log(candidates.value)
    isLoading.value = false;
  }
})

function onCandidatDetails() {
  router.push({ name: "candidat", params: { id: "0" } });
}

/* TODO suggestions:
   mettre le padding de nos pages dans une variables
   idem pour typographie titre
   On pourrait utiliser des class 
*/
</script>
<style scoped>
h2 {
  font-size: 3rem;
}
.page-padding {
  padding: 3rem;
}
</style>
