<template>
 <router-link to="/">
    <img src="@/assets/images/estage-logo.png" alt="Logo Estage">
  </router-link>
  <div class="navMenuAction">
    <div class="flex navMenuAction__item">
      <div>
        <a
          href="#"
          class="flex items-center px-2 py-2 border-solid border-2 text-#ba2025 hover:text-white rounded-md navMenuAction_btn_offre text-base"
        >
        <IconPlus class="h-4 w-4 mr-2 fill-current text-#ba2025 hover:text-white"/>Ajouter une offre de stage</a>
      </div>
      <div>
        <a
          href="#"
          class="flex items-center px-2 py-2 border-solid border-2 text-#cb902a hover:text-white rounded-md navMenuAction_btn_demande text-base">
        <IconPlus class="h-4 w-4 mr-2 fill-current text-#cb902a hover:text-white"/>Ajouter une demande de stage</a>
      </div>
      <div>
        <a
          href="#"
          class="flex items-center px-2 py-2 border-solid border-2  text-#86a8e6 hover:text-white rounded-md navMenuAction_btn_entreprise text-base">
        <IconPlus class="h-4 w-4 mr-2 fill-current text-#86a8e6 hover:text-white"/> Ajouter une entreprise</a>
      </div>
      <div>
        <a
          href="#"
          class="flex items-center px-2 py-2 border-solid border-2 text-#7e2986 hover:text-white rounded-md navMenuAction_btn_candidat text-base">
          <IconPlus class="h-4 w-4 mr-2 fill-current text-#7e2986 hover:text-white"/> 
          Ajout un candidat
        </a>
      </div>
    </div>

    <div class="flex gap-4 navMenuAction__utilisateur ml-20">

      <div>
        <div><p>{{ nom }}</p></div>
        <div><p>{{ email }}</p></div>
      </div>
      <div>
        <img src="../assets/images/johnDoe.png" alt="Photo de John Doe" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/AuthStore.js';
import IconPlus from './icons/IconPlus.vue';

const store = useAuthStore();
const nom = store.nom;
const email = store.email;

// Retourne les valeurs nom et email pour les rendre disponibles dans le template
{ 
  const nom = store.nom;
  const email = store.email;
  const IconPlus = IconPlus;
}
</script>