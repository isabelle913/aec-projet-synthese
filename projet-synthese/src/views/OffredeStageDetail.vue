<template>
  <div class="DemandeStage__Titre">
    <h1>Détail de l'offre de stage</h1>
  </div>

  <section class="bg-white p-10 DemandeStage__section">
    <div>
      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="title">Titre du poste</label>
        <p>{{ title }}</p>
      </div>

      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="description">Description du poste</label>
        <p>{{ description }}</p>
      </div>

      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="enterprise">Nom de l'entreprise</label>
        <p>{{ enterpriseName }}</p>
      </div>

      <h3>Informations sur l'entreprise</h3>
      <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="description_entreprise">Courte présentation de l'entreprise</label>
              <p>{{ enterpriseDescription }}</p>
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="city_entreprise">Ville</label>
              <p>{{ enterpriseVille }}</p>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="phone_entreprise">Numéro de téléphone de l'entreprise :</label>
              <p>{{ enterprisePhone }}</p>
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="email_entreprise">Courriel de l'entreprise</label>
              <p>{{ enterpriseEmail }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="DemandeStage__section__info__item">
        <div class="mb-16">
          <label class="text-bg font-bold" for="requiredSkills">Compétences requises</label>
          <ul>
            <li v-for="skill in requiredSkills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>

      <h3>Informations sur l'offre de stage</h3>
      <div class="grid grid-cols-12 gap-5 my-8 mb-20 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="province">Province</label>
              <p>{{ province }}</p>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="weeklyWorkHours">Heures par semaine</label>
              <p>{{ weeklyWorkHours }}</p>
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="salary">Salaire</label>
              <p>{{ salary }}</p>
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="internshipType">Type de l'offre</label>
              <p>{{ internshipType }}</p>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="paid">Rémunération</label>
              <p>{{ paid }}</p>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="startDate">Date de début</label>
              <p>{{ formatDate(startDate) }}</p>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="endDate">Date de fin</label>
              <p>{{ formatDate(endDate) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="DemandeStage__btn">
    <button class="text-slate-400 border-solid text-2xl border-slate-400 border-2 py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline" @click="cancel">
      <RouterLink :to="{ name: 'offres' }">Retour a la liste des offres</RouterLink>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";

import OffresService from "../services/internshipOffers/internshipOffersServices";

const router = useRouter();

const { getInternshipOffereById } = OffresService();
const title = ref("");
const description = ref("");
const enterpriseName = ref({});

const enterpriseDescription = ref({});
const enterpriseVille = ref({});
const enterprisePhone = ref({});
const enterpriseEmail = ref({});

const province = ref("");
const weeklyWorkHours = ref("");
const salary = ref("");
const internshipType = ref({});
const paid = ref("");
const requiredSkills = ref([]);
const startDate = ref("");
const endDate = ref("");

function formatDate(value) {
  return new Date(value).toLocaleString();
}
onMounted(async () => {
  const _id = router.currentRoute.value.params.id;

  try {
    const offer = await getInternshipOffereById(_id);
    title.value = offer.title;
    description.value = offer.description;
    enterpriseName.value = offer.enterprise.name;

    enterpriseDescription.value = offer.enterprise.description;
    enterpriseVille.value = offer.enterprise.city;
    enterprisePhone.value = offer.enterprise.phone;
    enterpriseEmail.value = offer.enterprise.email;

    province.value = offer.province.value;
    weeklyWorkHours.value = offer.weeklyWorkHours;
    salary.value = offer.salary;
    internshipType.value = offer.internshipType.value;
    paid.value = offer.paid;
    startDate.value = offer.startDate;
    endDate.value = offer.endDate;
    requiredSkills.value = offer.requiredSkills;

    // Affecter d'autres valeurs des champs de l'offre ici
  } catch (error) {
    console.error("Erreur lors de la récupération de l'offre de stage :", error);
  }
});
</script>
