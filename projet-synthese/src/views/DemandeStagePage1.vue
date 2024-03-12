<template>
  <div class="DemandeStage__Titre">
    <p>Demande de stage</p>
    <h1>Développeur Front-End</h1>
  </div>
  <div class="DemandeStage__btn">
    <button class="text-green-500 DemandeStage__btn__check">
      <ion-icon name="checkmark-sharp"></ion-icon>
    </button>
    <button class="text-slate-700 DemandeStage__btn__create">
      <ion-icon name="create-sharp"></ion-icon>
    </button>
    <button class="text-red-500 DemandeStage__btn__close">
      <ion-icon name="close-sharp"></ion-icon>
    </button>
  </div>

  <section class="bg-white p-10 DemandeStage__section">
    <div class="DemandeStage__section__Entete">
      <h2>Kevin Labonté</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolorum
        nisi quidem harum accusamus voluptatum repellendus nobis veniam.
        Voluptates provident quas ullam. Praesentium obcaecati beatae minima
        doloribus sequi unde, excepturi illo! Fugit necessitatibus
        exercitationem sapiente dolor atque tempore, eos nisi quo ipsum. In
        nulla quae, quod esse similique veniam deserunt dolor ut nihil repellat
        vitae, iure, explicabo.
      </p>
      <br />
      <p>
        maxime voluptates earum eum obcaecati autem quaerat voluptatem magnam
        illo expedita voluptas. Saepe earum quas laborum repellendus obcaecati,
        similique error adipisci recusandae porro, autem nulla quo officia
        perferendis quos soluta necessitatibus? Eaque labore eveniet ut odit qui
        dolor temporibus minus obcaecati, pariatur recusandae?
      </p>
    </div>

    <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
        <div class="DemandeStage__section__info__item">
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Secteur d'activité</strong></p>
          <p>Nouvelles technologies de l'information</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Compétences</strong></p>
          <p>HTML, CSS, JavaScript, React, vue.js, GIT PHP, MySQL.</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
        <div class="DemandeStage__section__info__item">
          <p><strong>Établissement d'enseignement :</strong></p>
          <p>Cégep de Trois-Rivières</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Ville</strong></p>
          <p>Trois-Rivères</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Région</strong></p>
          <p>Mauricie</p>
        </div>
      </div>
    </div>

    <h3>Information sur le stage recherché</h3>

    <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
        <div class="DemandeStage__section__info__item">
          <p><strong>Type de stage</strong></p>
          <p>Temps plein</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Nombre d'heure par semaine</strong></p>
          <p>25 heures par semaine</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Rémunération</strong></p>
          <p>À la discrétion de l'entreprise</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
        <div class="DemandeStage__section__info__item">
          <p><strong>Date de début</strong></p>
          <p>2022-05-25</p>
        </div>
        <div class="DemandeStage__section__info__item">
          <p><strong>Date de fin</strong></p>
          <p>2022-09-01</p>
        </div>
      </div>
    </div>

    <h3>Informations suplémentaires</h3>
    <div class="mt-8">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        expedita maxime vel quis quas quia, laborum rerum tempora et possimus
        officiis, ullam sunt esse perspiciatis accusamus beatae iure eligendi
        blanditiis reiciendis nisi quae quibusdam nostrum ratione. Magni
        architecto error atque velit dicta quas voluptatem qui. Quis sequi,
        reiciendis et sint ab mollitia at sapiente? Similique.
      </p>
      <button
        class="text-white font-bold py-4 px-4 mt-24 rounded focus:outline-none focus:shadow-outline btn"
        @click="telecharger"
      >
        <div>
          <ion-icon name="cloud-download-sharp"></ion-icon>Télécharger le C.V.
        </div>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "DemandeStagePage1",
};
</script>
