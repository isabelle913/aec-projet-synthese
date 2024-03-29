<template>
  <div class="bg-white p-12">
    <div v-if="isTableaubord" class="mb-12">
      <div class="text-2xl font-semibold">
        Dernières <span class="font-semibold" :class="isDemande ? 'text-demandes' : 'text-offres'">{{ theTitle }}</span> de stage
      </div>
      <div class="text-red-500 text-sm">En attente de validation</div>
    </div>
    <div v-else>
      <div class="py-8"></div>
    </div>

    <div v-if="isTableaubord" class="grid grid-cols-12">
      <div class="col-span-12 sm:col-span-8 lg:col-span-4 sm:mr-4" :class="theClassHeader">{{ isDemande ? "Profil" : "Poste" }}</div>
      <div class="hidden lg:block lg:col-span-3 mr-4" :class="theClassHeader">{{ isDemande ? "Établissement" : "Ville" }}</div>
      <div class="hidden lg:block lg:col-span-2 mr-4" :class="theClassHeader">Date</div>
      <div class="col-span-12 sm:col-span-4 lg:col-span-3" :class="theClassHeader">Actions</div>
    </div>
    <div v-else class="grid grid-cols-12">
      <div class="col-span-12 sm:col-span-8 lg:col-span-4 sm:mr-4" :class="theClassHeader">Poste</div>
      <div class="hidden lg:block lg:col-span-2 mr-4" :class="theClassHeader">Secteur d'activité</div>
      <div class="hidden lg:block lg:col-span-2 mr-4" :class="theClassHeader">Région</div>
      <div class="hidden lg:block lg:col-span-2 mr-4" :class="theClassHeader">Date</div>
      <div class="col-span-12 sm:col-span-3 lg:col-span-2" :class="theClassHeader">Actions</div>
    </div>

    <ListeItemRequest v-if="isDemande" v-for="item in listeItems" :key="item._id" :item="item" :is-tableaubord="isTableaubord" @update-data="updateData" />
    <ListeItemOffer v-if="!isDemande" v-for="item in theListeItems" :key="item._id" :item="item" :is-tableaubord="isTableaubord" @update-data="updateData" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ListeItemRequest from "./ListeItemRequest.vue";
import ListeItemOffer from "./ListeItemOffer.vue";

const props = defineProps({
  listeItems: {
    type: Array,
    required: true,
  },
  isDemande: {
    type: Boolean,
    default: false,
  },
  isTableaubord: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["updateData"]);
const theListeItems = ref(props.listeItems);

const theClassHeader = "text-gray-600 border-b-4 border-b-gray-600 h-[35px]";

const theTitle = computed(() => {
  return props.isDemande ? "demandes" : "offres";
});

function updateData() {
  console.log("updateData from ListeBase");
  emit("updateData");
}
</script>
<style scoped></style>
