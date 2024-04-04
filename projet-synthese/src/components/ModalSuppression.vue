<template>
  <Transition name="modal">
    <div v-if="theModel" class="modal-suppression">
      <div class="modal-container">
        <div class="text-4xl text-center">
          Voulez-vous vraiment supprimer: <span class="font-semibold">{{ description }}</span>
        </div>
        <div class="flex items-center text-center">
          <span class="material-symbols-outlined text-red-500 text-6xl">priority_high</span>
          <span class="text-2xl">Attention cette action est irréversible</span>
        </div>
        <div class="flex flex-wrap justify-center gap-5">
          <BtnBase title="Annuler" icon="close" outline btn-class="btn-modal-delete__outline" @click="onClose" />
          <BtnBase title="Supprimer" icon="delete" btn-class="btn-modal-delete" :action="action" />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { computed } from "vue";
import BtnBase from "./BtnBase.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  action: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["close", "update:modelValue"]);

const theModel = computed({
  get: () => props.modelValue,
  set: (value) => defineEmits("update:modelValue", value),
});

function onClose() {
  emit("close");
}
</script>
<style scoped>
/* https://fr.vuejs.org/examples/#modal */
.modal-suppression {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 40%;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
