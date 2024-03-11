<template>
  <div class="grid grid-cols-4 navMenu">
    <div>
      <a
        href="#"
        class="px-2 py-2 border-solid border-2 text-white hover:text-white rounded-md btn_offre"
      >
        <ion-icon name="add-sharp" class="pr-1"></ion-icon>Ajouter une offre de
        stage</a
      >
    </div>
    <div>
      <a
        href="#"
        class="px-2 py-2 border-solid border-2 text-white hover:text-white rounded-md btn_demande"
      >
        <ion-icon name="add-sharp" class="pr-1"></ion-icon>Ajouter une demande
        de stage</a
      >
    </div>
    <div>
      <a
        href="#"
        class="px-2 py-2 border-solid border-2 text-white hover:text-white rounded-md btn_entreprise"
      >
        <ion-icon name="add-sharp" class="pr-3"></ion-icon>Ajouter une
        entreprise</a
      >
    </div>
    <div>
      <a
        href="#"
        class="px-2 py-2 border-solid border-2 text-white hover:text-white rounded-md btn_candidat"
      >
        <ion-icon name="add-sharp" class="pr-1"></ion-icon>Ajout un candidat</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuAction",
};
</script>
