<template>
  <button class="rounded-md flex justify-center items-center gap-2" :class="btnClass" :style="theStyle" @click="action">
    <span v-if="theIconName.isDisplay" class="material-symbols-outlined" :class="iconSize">{{ theIconName.name }}</span>
    <span v-if="!showIconOnly">{{ title }}</span>
  </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
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
  btnClass: {
    type: String,
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
  iconSize: {
    type: String,
  },
});

const theStyle = computed(() => {
  const padding = props.small ? "0px 2px" : "5px 10px";

  if (!props.showIconOnly && props.outline) {
    return { padding, minWidth: "125px" };
  } else if (!props.showIconOnly) {
    return { padding, minWidth: "125px", color: "white" };
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
</script>
<style></style>
