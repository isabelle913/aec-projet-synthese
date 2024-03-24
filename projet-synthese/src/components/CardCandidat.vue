<template>
  <div class="flex-none bg-white p-4 w-[500px] h-[250px] flex cursor-pointer" @click="onDetails(candidat._id)">
    <div class="w-1/2 flex grid place-content-center p-6">
      <img :src="candidat.image" :alt="`Photo du candidat ${candadit.name}`" />
    </div>
    <div class="w-1/2 flex flex-col justify-center p-4">
      <div class="font-bold text-xl">{{ candidat.name }}</div>
      <div class="text-gray-400 text-sm">{{ candidat.address }}</div>
      <div class="text-gray-400 text-sm">{{ candidat.city }}, {{ candidat.postalCode }}</div>
      <div class="text-gray-400 text-sm mt-4">Téléphone: {{ candidat.phone }}</div>
      <div class="text-gray-400 text-sm">Télécopieur: {{ candidat.phone }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  candidat: {
    type: Object,
    required: true,
  },
});

function onDetails(idString) {
  router.push({ name: "candidat", params: { id: idString } });
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
