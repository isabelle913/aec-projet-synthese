<template>
  <section class="bg-slate-100 page-padding">
    <h2>Candidats</h2>
    <BtnBase title="Ajouter un candidat" color="#9b5ba2" :action="onCandidatDetails" />
    <div class="flex flex-wrap gap-5">
      <CardCandidat v-for="candidat in candidats" :key="candidat._id" :candidat="candidat" />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import BtnBase from "../components/BtnBase.vue";
import CardCandidat from "../components/CardCandidat.vue";

// import { mockCandidats } from "../mocks/Candidats.js"; // TODO changer source

const router = useRouter();

//const candidats = mockCandidats;
//console.log(candidat);

function onCandidatDetails() {
  router.push({ name: "candidat", params: { id: "0" } });
}

function load() {
  console.log("Ici on va loader les candidats");
  // TODO get allCandidats
}
load();

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
