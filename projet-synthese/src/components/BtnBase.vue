<template>
  <button class="my-6 p-4 rounded-lg" :style="theStyle" @click="action">{{ title }}</button>
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
});

const theStyle = computed(() => {
  if (props.outline) {
    return { border: `solid 1px #9CA3AF`, color: "#9CA3AF" };
  } else {
    return { backgroundColor: props.color };
  }
});

// TODO ajouter le hover plus foncé
</script>
<style></style>
