<template>
  <div>
    <p>Demande de stage</p>
    <h1>Développeur Front-End</h1>
  </div>
  <div class="">
    <button><ion-icon name="checkmark-sharp"></ion-icon></button>
    <button><ion-icon name="create-sharp"></ion-icon></button>
    <button><ion-icon name="trash-sharp"></ion-icon></button>
  </div>
  <section>
    <div>
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

    <div class="grid grid-cols-12 gap-5 my-8">
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10 p-16 bg-lime-300"></div>
    </div>
    <h3>Information sur le stage recherché</h3>
    <div class="grid grid-cols-12 gap-5 my-8">
      <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
        <div>
          <p><strong>Programme de formation</strong></p>
          <p>Développement Web</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10 p-16 bg-lime-300"></div>
    </div>
    <h3>Information sur le stage recherché</h3>
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        expedita maxime vel quis quas quia, laborum rerum tempora et possimus
        officiis, ullam sunt esse perspiciatis accusamus beatae iure eligendi
        blanditiis reiciendis nisi quae quibusdam nostrum ratione. Magni
        architecto error atque velit dicta quas voluptatem qui. Quis sequi,
        reiciendis et sint ab mollitia at sapiente? Similique.
      </p>
      <button
        class="text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline btn"
        @click="acceder"
      >
        <div>
          <ion-icon name="cloud-download-sharp"></ion-icon> Télécharger le C.V.
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
