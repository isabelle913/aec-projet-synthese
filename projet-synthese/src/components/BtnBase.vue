<template>
  <!-- p-4 my-6-->
  <button class="rounded-lg flex justify-center items-center gap-2" :style="theStyle" @click="action">
    <span v-if="theIconName.isDisplay" class="material-symbols-outlined" :class="showIconOnly ? 'text-3xl' : ''">{{ theIconName.name }}</span>
    <span v-if="!showIconOnly">{{ title }}</span>
  </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  action: {
    type: Function,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  showIconOnly: {
    type: Boolean,
    default: false,
  },
  iconColor: {
    type: String,
  },
});

const theStyle = computed(() => {
  const padding = props.small ? "0px 10px" : "16px";
  const margin = props.small ? "0" : "24px 0px";
  if (props.outline && !props.showIconOnly) {
    return { border: `solid 1px #9CA3AF`, color: "#9CA3AF", padding, minWidth: "125px" };
  } else if (!props.showIconOnly) {
    return { backgroundColor: props.color, padding, minWidth: "125px" };
  } else {
    return { color: props.iconColor };
  }
});

const theIconName = computed(() => {
  return {
    name: props.icon,
    isDisplay: props.icon ? true : false,
  };
});

// TODO ajouter le hover plus foncé
</script>
<style></style>
