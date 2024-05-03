<template>
  <div>
    <div class="flex">
      <div class="authentification-img">
        <img src="../assets/images/bg-home.jpg" alt="authentification projet de synthèse" />
      </div>

      <div class="authentification-container">
        <h1 class="text-5xl mb-4">Identification</h1>
        <p class="text-xs mb-16">Lorem ipsum magna aliqua, ut enim ad minim veniam, quis nostrud exercietation ullamco laboris nisi consequat.</p>

        <div class="authentification-container_form">
          <form @submit.prevent="handleSubmit" novalidate>
            <div class="mb-6">
              <input 
                type="text"
                id="nom"
                v-model="nomUtilisateur"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Votre nom et prénom *" />
            </div>
            <div class="mb-6">
              <input
                type="email"
                id="email"
                v-model="courrielUtilisateur"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Votre courriel *" />
            </div>
            <button
              type="submit"
              :disabled="isBtnSubmitDisable"
              :class="isBtnSubmitDisable ? 'cursor-disabled' : ''"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Accéder maintenant
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineEmits, ref } from "vue";
import { useRouter } from "vue-router";
import useUtile from "../composables/utile.js";

const router = useRouter();
const { validateEmail } = useUtile();

const nomUtilisateur = ref("");
const courrielUtilisateur = ref("");
const emit = defineEmits(['authenticated']);

const isBtnSubmitDisable = computed(() => {
  if (nomUtilisateur.value !== "" && validateEmail(courrielUtilisateur.value)) return false;
  return true;
});
// TODO améliorer couleur bouton lorsque disabled
const handleSubmit = () => {
  if (!isBtnSubmitDisable.value) {
    sessionStorage.setItem("nomUtilisateur", JSON.stringify(nomUtilisateur.value));
    sessionStorage.setItem("courrielUtilisateur", JSON.stringify(courrielUtilisateur.value));
    router.push({ name: "tableau-bord" });
    emit('authenticated', true);
  }
};
</script>




<style lang="scss">
@import "./../assets/main.scss";
.cursor-disabled {
  cursor: not-allowed;
}
</style>
