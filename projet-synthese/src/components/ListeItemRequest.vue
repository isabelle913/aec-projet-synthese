<template>
  <div class="py-4 border-b-2 border-b-gray-200">
    <div class="grid grid-cols-12">
      <!-- Poste / Profil -->
      <div v-if="isTableaubord" class="col-span-12 sm:col-span-8 lg:col-span-4 mr-4 pl-4 border-item" :class="theBorderClass">
        <div class="flex">
          <div class="p-2 mx-2 flex flex-col justify-center rounded-lg" :class="theBgClass">
            <span class="material-symbols-outlined text-4xl">school</span>
          </div>
          <div>
            <div class="text-lgfont-semibold">{{ item.title }}</div>
            <div class="text-gray-600">{{ theDisplayName }}</div>
          </div>
        </div>
      </div>
      <div v-else class="col-span-12 sm:col-span-8 lg:col-span-4 sm:mr-4 pl-4 border-item" :class="theBorderClass">
        <div class="flex">
          <div class="p-2 mx-2 flex flex-col justify-center rounded-lg" :class="theBgClass">
            <span class="material-symbols-outlined text-4xl">school</span>
          </div>
          <div>
            <div class="text-lgfont-semibold">{{ item.title }}</div>
            <div class="text-gray-600">{{ theDisplayName }}</div>
          </div>
        </div>
      </div>
      <!--Etablissement -->
      <div v-if="isTableaubord" class="hidden lg:block lg:col-span-3 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">Cegep de Trois-Rivières</div>
      </div>
      <!--Secteur activité -->
      <div v-if="!isTableaubord" class="hidden lg:block lg:col-span-2 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">Nouvelles technologies</div>
      </div>
      <!--Région -->
      <div v-if="!isTableaubord" class="hidden lg:block lg:col-span-2 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ item.candidate.city }}</div>
      </div>
      <!-- Date -->
      <div class="hidden lg:block lg:col-span-2 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ theDisplayDate }}</div>
      </div>
      <!-- Actions -->
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
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

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

const { deleteInternshipRequest, editInternshipRequest } = InternshipRequestsServices();
const router = useRouter();

const isOpenModalSuppression = ref(false);

const theModalSuppressionDescription = computed(() => {
  return props.item.title + " - " + theDisplayName.value;
});

const theBorderClass = computed(() => {
  if (props.isTableaubord) return "border-demandes";
  if (!props.item.isActive) return "border-demandes-inactives";
  else return "border-demandes";
});

const theBgClass = computed(() => {
  if (props.isTableaubord) return "bg-demandes";
  if (!props.item.isActive) return "bg-demandes-inactives";
  else return "bg-demandes";
});

const theDisplayName = computed(() => {
  return props.item.candidate.firstName + " " + props.item.candidate.lastName;
});

const theDisplayDate = computed(() => {
  return props.item.endDate.split("T")[0];
});

function onAccept() {
  props.item.isActive = true;
  editInternshipRequest(props.item);
  setTimeout(() => {
    location.reload();
  }, 1500);
}

function onView() {
  router.push({ path: `demande/${props.item._id}` });
}

function onEdit() {
  router.push({ path: `demande/${props.item._id}` });
}

function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete() {
  deleteInternshipRequest(props.item._id);
  isOpenModalSuppression.value = false;
  setTimeout(() => {
    location.reload();
  }, 1500);
}
</script>

<style scoped></style>
