<template>
  <div class="flex-none bg-white p-4 w-[500px] h-[250px] flex cursor-pointer" @click="onDetails(candidate._id)">
    <div class="w-1/2 place-content-center p-6">
      <img :src="candidate.image" :alt="`Photo du candidat ${candidate.firstName}`" />
    </div>
    <div class="w-1/2 flex flex-col justify-center p-4">
      <div class="font-bold text-xl">{{ candidate.firstName }}</div>
      <div class="text-gray-400 text-sm">{{ candidate.titre }}</div>
      <div class="text-gray-400 text-sm">{{ candidate.courriel }}</div>
      <div class="text-gray-400 text-sm mt-4">Téléphone: {{ candidate.phone }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  candidate: {
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
