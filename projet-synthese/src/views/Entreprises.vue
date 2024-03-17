<template>
  <section class="bg-slate-100 page-padding">
    <h2>Entreprises</h2>
    <BtnBase title="Ajouter une entreprise" color="#F9CB40" :action="onEnterpriseDetails" />
    <div class="flex flex-wrap gap-5">
      <CardEntreprise v-for="entreprise in entreprises" :key="entreprise._id" :entreprise="entreprise" />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useEnterpriseServices } from '../services/enterprises/enterprisesServices2.js'
import BtnBase from "../components/BtnBase.vue";
import CardEntreprise from "../components/CardEntreprise.vue";

import { mockEntreprise } from "../mocks/Entreprise.js"; // TODO changer source

const router = useRouter();
const { getEnterprises } = useEnterpriseServices()



const entreprises = mockEntreprise;
// console.log(entreprises);

function onEnterpriseDetails() {
  router.push({ name: "enterprise", params: { id: "0" } });
}

function load() {
  // console.log("Ici on va loader les entreprises");

  // TODO get allEntreprises
const kleenex = getEnterprises()
console.log('ICI', kleenex)

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
