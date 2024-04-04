<template>
  <router-link to="/">
     <img src="@/assets/images/estage-logo.png" alt="Logo Estage">
  </router-link>
   <div class="navMenuAction">
     <div class="flex navMenuAction__item">
       <div>
         <a
           href="/OffredeStageAjout"
           class="flex items-center px-2 py-2 border-solid border-2 text-#ba2025 hover:text-white rounded-md navMenuAction_btn_offre text-base"
         >
         <IconPlus class="h-4 w-4 mr-2 fill-current text-#ba2025 hover:text-white"/>Ajouter une offre de stage</a>
       </div>
       <div>
         <a
           href="/ajoutdemandestage"
           class="flex items-center px-2 py-2 border-solid border-2 text-#cb902a hover:text-white rounded-md navMenuAction_btn_demande text-base">
         <IconPlus class="h-4 w-4 mr-2 fill-current text-#cb902a hover:text-white"/>Ajouter une demande de stage</a>
       </div>
       <div>
         <a
           href="/entreprise/new"
           class="flex items-center px-2 py-2 border-solid border-2  text-#86a8e6 hover:text-white rounded-md navMenuAction_btn_entreprise text-base">
         <IconPlus class="h-4 w-4 mr-2 fill-current text-#86a8e6 hover:text-white"/> Ajouter une entreprise</a>
       </div>
       <div>
         <a
           href="/candidat/ajouter"
           class="flex items-center px-2 py-2 border-solid border-2 text-#7e2986 hover:text-white rounded-md navMenuAction_btn_candidat text-base">
           <IconPlus class="h-4 w-4 mr-2 fill-current text-#7e2986 hover:text-white"/> 
           Ajout un candidat
         </a>
       </div>
     </div>
 
     <div class="flex gap-4 navMenuAction__utilisateur ml-20">
 
       <div>
        <div><p>{{ utilisateur.nom }}</p></div>
        <div><p>{{ utilisateur.courriel }}</p></div>
       </div>
       <div>
         <img src="../assets/images/johnDoe.png" alt="Photo de John Doe" />
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   name: "MenuAction",
   components: {
     IconPlus
   },
  setup() {
    const nomUtilisateur = JSON.parse(sessionStorage.getItem("nomUtilisateur"));
    const courrielUtilisateur = JSON.parse(sessionStorage.getItem("courrielUtilisateur"));
    
    return {
      utilisateur: {
        nom: nomUtilisateur,
        courriel: courrielUtilisateur
      }
    };
  }
};
 
 import IconPlus from './icons/IconPlus.vue';
 </script>