<template>
  <div class="py-4 border-b-2 border-b-gray-200">
    <div class="grid grid-cols-12">
      <!-- Poste  -->
      <div v-if="isTableaubord" class="col-span-12 sm:col-span-8 lg:col-span-4 mr-4 pl-4 border-item" :class="theBorderClass">
        <div class="flex">
          <div class="p-2 mx-2 flex flex-col justify-center rounded-lg" :class="theBgClass">
            <span class="material-symbols-outlined text-4xl">business_center</span>
          </div>
          <div>
            <div class="text-lg font-semibold">{{ item.title }}</div>
            <div class="text-gray-600">{{ item.enterprise.name }}</div>
          </div>
        </div>
      </div>
      <div v-else class="col-span-12 sm:col-span-8 lg:col-span-4 sm:mr-4 pl-4 border-item" :class="theBorderClass">
        <div class="flex">
          <div class="p-2 mx-2 flex flex-col justify-center rounded-lg" :class="theBgClass">
            <span class="material-symbols-outlined text-4xl">business_center</span>
          </div>
          <div>
            <div class="text-lg font-semibold">{{ item.title }}</div>
            <div class="text-gray-600">{{ item.enterprise.name }}</div>
          </div>
        </div>
      </div>
      <!-- Secteur activité  -->
      <div v-if="!isTableaubord" class="hidden lg:block mr-4" :class="isTableaubord ? 'lg:col-span-3' : 'lg:col-span-2'">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ theActivitySector }}</div>
      </div>
      <!-- Ville / Région  -->
      <div class="hidden lg:block mr-4" :class="isTableaubord ? 'lg:col-span-3' : 'lg:col-span-2'">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ item.enterprise.city }}</div>
      </div>
      <!-- Date  -->
      <div class="hidden lg:block lg:col-span-2 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ theDisplayDate }}</div>
      </div>
      <!-- Actions  -->
      <div class="col-span-12 my-4" :class="isTableaubord ? 'sm:col-span-4 lg:col-span-3' : 'sm:col-span-3 lg:col-span-2'">
        <div class="h-full flex justify-between gap-2">
          <BtnBase v-if="isTableaubord" class="2xl:hidden" icon="Done" :action="onAccept" show-icon-only icon-color="green" icon-size="text-6xl" />
          <BtnBase v-if="isTableaubord" class="hidden 2xl:block" title="Accepter" btn-class="btn-accept" small :action="onAccept" />
          <div class="flex items-center gap-5">
            <div class="cursor-pointer flex flex-col justify-center" @click="onView"><span class="material-symbols-outlined text-blue-400"> visibility </span></div>
            <div class="cursor-pointer flex flex-col justify-center" @click="onEdit"><span class="material-symbols-outlined text-amber-600"> edit </span></div>
            <div class="cursor-pointer flex flex-col justify-center" @click="onOpenModalSuppression"><span class="material-symbols-outlined text-red-600"> delete </span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <ModalSuppression v-model="isOpenModalSuppression" :description="theModalSuppressionDescription" :action="onDelete" @close="isOpenModalSuppression = false" />
  </teleport>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

import ActivityServices from "@/services/activitySectors/activitySectorsServices";
import InternshipOffersService from "@/services/internshipOffers/internshipOffersServices";

import BtnBase from "./BtnBase.vue";
import ModalSuppression from "./ModalSuppression.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isTableaubord: {
    type: Boolean,
    default: false,
  },
});

const { objet, getActivitySectorById } = ActivityServices();
const { deleteInternshipOffer, editInternshipOffer } = InternshipOffersService();
const router = useRouter();

const theActivitySector = ref("n/d");
const isOpenModalSuppression = ref(false);

const theModalSuppressionDescription = computed(() => {
  return props.item.title + " - " + props.item.enterprise.name;
});

const theBorderClass = computed(() => {
  if (props.isTableaubord) return "border-offres";
  if (!props.item.isActive) return "border-offres-inactive";
  else return "border-offres";
});

const theBgClass = computed(() => {
  if (props.isTableaubord) return "bg-offres";
  if (!props.item.isActive) return "bg-offres-inactives";
  else return "bg-offres";
});

const theDisplayDate = computed(() => {
  return props.item.endDate.split("T")[0];
});

function onAccept() {
  props.item.isActive = true;
  editInternshipOffer(props.item);
  setTimeout(() => {
    location.reload();
  }, 1500);
}
function onView() {
  router.push({ name: "OffredeStageDetail", params: { id: props.item._id } });
}

function onEdit() {
  router.push({ name: "OffredeStageEdit", params: { id: props.item._id, action: "update" } });
}
function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete() {
  deleteInternshipOffer(props.item._id);
  isOpenModalSuppression.value = false;
  setTimeout(() => {
    location.reload();
  }, 1500);
}

onMounted(() => {
  getActivitySectorById(props.item.enterprise.activitySector);
});

watchEffect(() => {
  if (Object.keys(objet.value).length !== 0) {
    theActivitySector.value = objet.value.value;
    // console.log("theActivitySector", theActivitySector.value);
  } else {
    theActivitySector.value = "n/d";
  }
});
</script>

<style scoped></style>
