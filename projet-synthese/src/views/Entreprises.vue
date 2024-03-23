<template>
  <section class="bg-slate-100 page-padding">
    <h2>Entreprises</h2>
    <BtnBase class="my-8" title="Ajouter une entreprise" color="#F9CB40" :action="onEnterpriseDetails" />
    <div class="flex flex-wrap gap-5">
      <CardEntreprise v-for="entreprise in entreprises" :key="entreprise._id" :entreprise="entreprise" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";

import BtnBase from "../components/BtnBase.vue";
import CardEntreprise from "../components/CardEntreprise.vue";

import EnterpriseService from "../services/enterprises/enterprisesServices";

const router = useRouter();

const { liste, allEnterprises } = EnterpriseService();
const entreprises = ref([]);

onMounted(() => {
  allEnterprises();
});

watchEffect(() => {
  if (Array.isArray(liste.value)) {
    entreprises.value = [...liste.value];
    console.log(entreprises.value);
  }
});

function onEnterpriseDetails() {
  router.push({ name: "enterprise", params: { id: "0" } });
}

/* TODO suggestions:
   mettre le padding de nos pages dans une variable
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
