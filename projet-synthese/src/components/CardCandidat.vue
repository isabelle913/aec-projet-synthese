<template>
  <div class="flex bg-white h-[120px] mt-20 mr-4 cursor-pointer cardCandidates" @click="onDetails(candidat._id)">
    <div class="w-1/3 place-content-center p-4">
      <img src="@/assets/images/icon-candidat.png" :alt="`Photo du candidat`" />
    </div>
    <div class="flex flex-col justify-center p-4">
      <div class="font-bold text-2xl">{{ candidat.firstName }}</div>
      <div class="text-gray-400 text-xl">{{ candidat.skills ? candidat.skills[0] : '' }}</div>
      <div class="text-gray-400 text-xl mt-4">{{ candidat.email }}</div>
      <div class="text-gray-400 text-xl">Téléphone: {{ candidat.phone }}</div>
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

.cardCandidates{
  width: 31%;
}
</style>
