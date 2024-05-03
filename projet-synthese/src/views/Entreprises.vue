<template>
  <section class="page-background page-padding">
    <div>
      <h2>Entreprises</h2>
      <BtnBase class="mb-24 mt-20" title="Ajouter une entreprise" btn-class="btn-entreprise" :action="onAddEntreprise" />
      <div class="flex flex-wrap gap-24">
        <CardEntreprise v-for="entreprise in entreprises" :key="entreprise._id" :entreprise="entreprise" />
      </div>
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
import CardEntreprise from "../components/CardEntreprise.vue";
import Loader from "@/components/Loader.vue";

import EnterpriseService from "../services/enterprises/enterprisesServices";

const router = useRouter();

const { enterpriseListe, allEnterprises } = EnterpriseService();
const entreprises = ref([]);

const isLoading = ref(true);

onMounted(() => {
  allEnterprises();
});

watchEffect(() => {
  if (Array.isArray(enterpriseListe.value)) {
    entreprises.value = [...enterpriseListe.value];
    // console.log(entreprises.value);
    isLoading.value = false;
  }
});

function onAddEntreprise() {
  router.push({ name: "entreprise", params: { id: "new" } });
}
</script>

<style scoped></style>
