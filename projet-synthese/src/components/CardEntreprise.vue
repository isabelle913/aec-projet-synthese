<template>
  <div class="flex-none bg-white p-4 w-2/5 h-[250px] flex cursor-pointer" @click="onDetails(entreprise._id)">
    <div class="w-1/2 flex grid place-content-center p-6">
      <img :src="getLogo(entreprise.name)" :alt="`Logo de l'entreprise ${entreprise.name}`" />
    </div>
    <div class="w-1/2 flex flex-col justify-center p-4">
      <div class="font-bold text-xl">{{ entreprise.name }}</div>
      <div class="text-gray-400 text-sm">{{ entreprise.address }}</div>
      <div class="text-gray-400 text-sm">{{ entreprise.city }}, {{ entreprise.postalCode }}</div>
      <div class="text-gray-400 text-sm mt-4">Téléphone: {{ entreprise.phone }}</div>
      <div class="text-gray-400 text-sm">Télécopieur: {{ entreprise.phone }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import useLogoBank from "@/composables/logoBank.js";

const router = useRouter();
const { getLogo } = useLogoBank();

const props = defineProps({
  entreprise: {
    type: Object,
    required: true,
  },
});

function onDetails(idString) {
  router.push({ name: "entreprise", params: { id: idString } });
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
