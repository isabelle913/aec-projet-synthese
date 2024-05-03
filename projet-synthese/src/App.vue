<template>
  <div class="container mx-auto">
    <div v-if="!isAuthenticated">
      <Authentificator @authenticated="onAuthenticated" />
    </div>
    <div v-else>
      <!-- Header -->
      <div class="flex justify-between items-center">
        <MenuAction />
      </div>
      <!-- menu -->
      <div class="flex">
        <Navigation />
        <div class="w-3/4">
          <!-- Contenu de l'application -->
          <router-view />
        </div>
      </div>
    </div>
    <Footer/>    
  </div>
  
</template>

<script setup>
import { onMounted, ref } from "vue";

import Navigation from "./components/Navigation.vue";
import MenuAction from "./components/MenuAction.vue";
import Authentificator from "./components/Authentificator.vue";
import Footer from "./components/Footer.vue";

const isAuthenticated = ref(false);

const onAuthenticated = () => {
  isAuthenticated.value = true;
};

onMounted(() => {
  let nomUtilisateur = sessionStorage.getItem("nomUtilisateur");
  let courrielUtilisateur = sessionStorage.getItem("courrielUtilisateur");
  if (nomUtilisateur && courrielUtilisateur) {
    isAuthenticated.value = true;
  }
});
</script>

<style scoped></style>
