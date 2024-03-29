<template>
  <div v-if="modelValue" class="loader-background">
    <div class="loader-container">
      <div class="dot d1"></div>
      <div class="dot d2"></div>
      <div class="dot d3"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
