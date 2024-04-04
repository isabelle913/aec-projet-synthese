<template>
  <div class="border-l-8 border-l-gray-600 px-4">
    <div class="text-gray-800 mb-4 text-2xl font-semibold">{{ label }}</div>
    <div v-if="!isEdit" class="text-gray-400">{{ theModel }}</div>

    <div v-else>
      <label for="name" class="hidden">{{ label }}</label>
      <input class="w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="name" name="name" type="text" v-model="theModel" />
      <p v-if="isError" class="text-red-500 text-base italic">Veuillez remplir ce champ.</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  isError: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  isEdit: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const theModel = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue.trim()),
});
</script>
