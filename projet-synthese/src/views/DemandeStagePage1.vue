<template>
  <div v-if="InternshipRequest">
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
        <h2>
          {{ InternshipRequest.candidate.firstName }}
          {{ InternshipRequest.candidate.lastName }}
        </h2>
        <p>
          {{ InternshipRequest.candidate.description }}
        </p>
        <br />
        <p>
          {{ InternshipRequest.candidate.description }}
        </p>
      </div>

      <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <p><strong>Programme de formation</strong></p>
            <p>{{ InternshipRequest.title }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Secteur d'activité</strong></p>
            <p>{{ InternshipRequest.description }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Compétences</strong></p>
            <p>{{ InternshipRequest.skills }}</p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
          <div class="DemandeStage__section__info__item">
            <p><strong>Établissement d'enseignement :</strong></p>
            <p>CégepdeTroisRivières</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Ville</strong></p>
            <p>{{ InternshipRequest.candidate.city }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p>
              <strong>Région</strong>
            </p>
            <p>{{ InternshipRequest.province.value }}</p>
          </div>
        </div>
      </div>

      <h3>Information sur le stage recherché</h3>

      <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <p><strong>Type de stage</strong></p>
            <p>{{ InternshipRequest.internshipType.value }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Nombre d'heure par semaine</strong></p>
            <p>{{ InternshipRequest.weeklyWorkHours }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Rémunération</strong></p>
            <p>ladiscrétionde lentreprise</p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
          <div class="DemandeStage__section__info__item">
            <p><strong>Date de début</strong></p>
            <p>{{ InternshipRequest.startDate }}</p>
          </div>
          <div class="DemandeStage__section__info__item">
            <p><strong>Date de fin</strong></p>
            <p>{{ InternshipRequest.endDate }}</p>
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
          reiciendis et sint ab mollitia at sapiente Similique.
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
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

const router = useRouter();
const { _id } = router.currentRoute.value.params;
const { liste, allInternshipRequests } = InternshipRequestsServices();
const InternshipRequest = ref(null);

onMounted(() => {
  allInternshipRequests();
});

function load() {
  watchEffect(() => {
    if (Array.isArray(liste.value)) {
      InternshipRequest.value = liste.value.find((item) => item._id === _id);
    }
  });
}
load();
</script>
