<template>
  <div class="bg-white p-12">
    <div class="mb-12">
      <div class="text-2xl font-semibold">
        Dernières <span class="font-semibold" :class="isDemande ? 'text-demandes' : 'text-offres'">{{ theTitle }}</span> de stage
      </div>
      <div class="text-red-500 text-sm">En attente de validation</div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-12 sm:col-span-8 lg:col-span-4 text-gray-600 leading-8 border-b-4 border-b-gray-600 sm:mr-4">Profil</div>
      <div v-if="isDemande" class="lg:col-span-3 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4 hidden lg:block">Établissement</div>
      <div v-else class="lg:col-span-3 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4 hidden lg:block">Ville</div>
      <div class="lg:col-span-2 text-gray-600 leading-8 border-b-4 border-b-gray-600 mr-4 hidden lg:block">Date</div>
      <div class="col-span-12 sm:col-span-4 lg:col-span-3 text-gray-600 leading-8 border-b-4 border-b-gray-600">Actions</div>
    </div>

    <ListeItemRequest v-if="isDemande" v-for="item in listeItems" :key="item._id" :item="item" />
    <ListeItemOffer v-if="!isDemande" v-for="item in listeItems" :key="item._id" :item="item" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ListeItemRequest from "./ListeItemRequest.vue";
import ListeItemOffer from "./ListeItemOffer.vue";

const props = defineProps({
  listeItems: {
    type: Array,
    required: true,
  },
  isDemande: {
    // gang ce props est pour déterminer si c'est une demande ou une offre
    type: Boolean,
    default: false,
  },
});

const theTitle = computed(() => {
  return props.isDemande ? "demandes" : "offres";
});
</script>
<style scoped>
/* TODO changer couleur pour les variables */
.text-demandes {
  color: #f9cb40;
}

.text-offres {
  color: #bc4b51;
}
</style>
