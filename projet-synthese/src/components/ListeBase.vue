<template>
  <div class="bg-white p-12">
    <div class="mb-12">
      <div class="text-xl font-semibold">
        Dernières <span class="font-semibold" :style="theTitleStyle">{{ title }}</span> de stage
      </div>
      <div class="text-red-500 text-sm">En attente de validation</div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-4 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4">Profil</div>
      <div class="col-span-3 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4">Établissement</div>
      <div class="col-span-2 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4">Date</div>
      <div class="col-span-3 text-gray-600 leading-8 border-b-4 border-b-gray-600">Actions</div>
    </div>

    <ListeItem v-for="item in listeItems" :key="item._id" :item="item" :color="color" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import ListeItem from "./ListeItem.vue";

const props = defineProps({
  listeItems: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

console.log("props", props);

const theTitleStyle = computed(() => {
  return {
    color: props.color,
  };
});
</script>
