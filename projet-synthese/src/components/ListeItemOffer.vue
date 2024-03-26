<template>
  <div class="py-4 border-b-2 border-b-gray-200">
    <div class="grid grid-cols-12">
      <!--  -->
      <div class="col-span-12 sm:col-span-8 lg:col-span-4 mr-4 pl-4 border-item" :class="theBorderClass">
        <div class="flex">
          <div class="p-2 mx-2 flex flex-col justify-center rounded-lg bg-offres">
            <span class="material-symbols-outlined text-4xl">business_center</span>
          </div>
          <div>
            <div class="text-lgfont-semibold">{{ item.title }}</div>
            <div class="text-gray-600">{{ item.enterprise.name }}</div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="lg:col-span-3 mr-4 hidden lg:block">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ item.enterprise.city }}</div>
      </div>
      <!--  -->
      <div class="lg:col-span-2 mr-4 hidden lg:block">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ theDisplayDate }}</div>
      </div>
      <!--  -->
      <div class="col-span-12 sm:col-span-4 lg:col-span-3 my-4">
        <div class="h-full flex justify-between">
          <BtnBase title="Accepter" color="#BCED09" small :action="onAccept" />
          <div class="flex items-center gap-5">
            <div class="cursor-pointer flex flex-col justify-center" @click="onView"><span class="material-symbols-outlined text-blue-400"> visibility </span></div>
            <div class="cursor-pointer flex flex-col justify-center" @click="onEdit"><span class="material-symbols-outlined text-amber-600"> edit </span></div>
            <div class="cursor-pointer flex flex-col justify-center" @click="onDelete"><span class="material-symbols-outlined text-red-600"> delete </span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import BtnBase from "./BtnBase.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const theBorderClass = computed(() => {
  if (!props.item.isActive) return "border-inactive";
  else return "border-offres";
});

const theDisplayDate = computed(() => {
  return props.item.endDate.split("T")[0];
});
function onAccept() {
  console.log("Accepte", props.item._id);
  // TODO ?? qu'est-ce que ça fait quand on accepte
}
function onView() {
  console.log("onView");
  // TODO mettre route vers candidat view
  // router.push({ name: "candidat", params: { id: props.item._id } });
}
function onEdit() {
  console.log("onEdit");
  // TODO mettre route vers candidat edit
  //  router.push({ name: "candidat", params: { id: props.item._id } });
}
function onDelete() {
  console.log("onDelete");
  // TODO mettre route vers modal pour supprimer candidat
}
</script>

<style scoped>
/* TODO changer couleur pour les variables */
.border-item {
  border-left-style: solid;
  border-left-width: 4px;
}
.border-offres {
  border-left-color: #bc4b51;
}
.border-inactive {
  border-left-color: red;
}
.bg-offres {
  background-color: #bc4b51;
}
</style>
