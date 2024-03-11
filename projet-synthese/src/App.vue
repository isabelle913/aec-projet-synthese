<template>
  <div class="grid grid-cols-12 gap-5 my-8 container">
    <div class="col-span-12 md:col-span-2 max-md:p-10 my-4 bg-slate-400">
      <Navigation />
    </div>
    <div class="col-span-12 md:col-span-10 max-md:p-10 my-4 bg-red-300">
      <div
        class="col-span-12 md:col-span-8 max-md:p-10 p-16 my-10 bg-slate-300 menuAction"
      >
        <MenuAction />
      </div>
      <div
        class="col-span-12 md:col-span-8 max-md:p-10 p-16 bg-slate-300 variableSection"
      >
        <router-view :identification="identification" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import MenuAction from "./components/MenuAction.vue";
</script>

<style scoped></style>
