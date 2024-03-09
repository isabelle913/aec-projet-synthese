<template>
  <button class="my-6 p-4 rounded-lg" :style="{ backgroundColor: color }" @click="action">{{ title }}</button>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#0c9da3", // TODO remplacer par la variable
  },
  action: {
    type: Function,
  },
});
</script>
<style></style>
