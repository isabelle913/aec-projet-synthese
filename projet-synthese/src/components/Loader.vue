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
// TODO Changer couleur des points
</script>

<style scoped>
.loader-background {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  /* width: 100%; */
  /* height: 100%; */
  background-color: rgba(0, 0, 0, 0.5);
  /* display: flex; */
  /* transition: opacity 0.3s ease; */
}
.loader-container {
  /* position: absolute; */
  /* background: #f1f1f1; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease-in-out;
}
.dot {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  margin: 0 15px;
  animation: loader infinite 0.3s alternate;
}
.d2 {
  animation-delay: 0.05s;
}
.d3 {
  animation-delay: 0.1s;
}
@keyframes loader {
  100% {
    transform: translateY(-30px);
  }
}
</style>
