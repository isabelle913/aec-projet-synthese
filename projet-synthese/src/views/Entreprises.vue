<template>
  <section class="bg-slate-100 page-padding">
    <h2>Entreprises</h2>
    <BtnBase title="Ajouter une entreprise" color="#F9CB40" :action="disBonjour" />
    <div class="flex flex-wrap gap-5">
      <CardEntreprise v-for="entreprise in entreprises" :key="entreprise._id" :entreprise="entreprise" />
    </div>
  </section>
</template>

<script setup>
import { mockEntreprise } from "../mocks/Entreprise.js"; // TODO changer source

import BtnBase from "../components/BtnBase.vue";
import CardEntreprise from "../components/CardEntreprise.vue";

const entreprises = mockEntreprise;
console.log(entreprises);

function disBonjour() {
  console.log("disBonjour"); // TODO changer pour goto Formulaire
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
