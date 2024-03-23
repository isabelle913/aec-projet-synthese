<template>
  <!-- p-4 my-6-->
  <button class="rounded-lg" :style="theStyle" @click="action">{{ title }}</button>
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
});

const theStyle = computed(() => {
  const padding = props.small ? "0px 10px" : "16px";
  const margin = props.small ? "0" : "24px 0px";
  if (props.outline) {
    return { border: `solid 1px #9CA3AF`, color: "#9CA3AF", padding };
  } else {
    return { backgroundColor: props.color, padding };
  }
});

// TODO ajouter le hover plus foncé
</script>
<style></style>
