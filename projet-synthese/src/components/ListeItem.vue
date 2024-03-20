<template>
  <div class="py-4 border-b-2 border-b-gray-200">
    <div class="grid grid-cols-12">
      <!--  -->
      <div class="col-span-4 mr-4 pl-4" :style="theBorderStyle">
        <div class="flex">
          <div class="p-2">L</div>
          <div>
            <div class="text-lgfont-semibold">Intégrateur Web</div>
            <div class="text-gray-600">{{ theDisplayName }}</div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-span-3 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">Cegep de Trois-Rivières</div>
      </div>
      <!--  -->
      <div class="col-span-2 mr-4">
        <div class="h-full flex flex-col justify-center text-gray-600">{{ theDisplayDate }}</div>
      </div>
      <!--  -->
      <div class="col-span-3">
        <div class="h-full flex justify-between">
          <BtnBase title="Accepter" color="#BCED09" small :action="onAccept" />
          <div class="flex items-center gap-5">
            <div class="cursor-pointer" @click="onView">V</div>
            <div class="cursor-pointer" @click="onEdit">E</div>
            <div class="cursor-pointer" @click="onDelete">S</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import BtnBase from "./BtnBase.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

console.log("item", props.item);

const theBorderStyle = computed(() => {
  const color = props.item.isActive ? props.color : "#475569";
  return {
    borderLeft: `solid 4px ${color}`,
  };
});
const theDisplayName = computed(() => {
  return props.item.candidate.firstName + " " + props.item.candidate.lastName;
});
const theDisplayDate = computed(() => {
  return props.item.endDate.split("T")[0];
});
function onAccept() {
  console.log("Accepte", props.item._id);
}
function onView() {
  console.log("onView");
}
function onEdit() {
  console.log("onEdit");
}
function onDelete() {
  console.log("onDelete");
}
</script>
