<template >
    <div class="DemandeStage__Titre">
      <h1>Ajouter une offre de stage</h1>
    </div>
  
    <div class="DemandeStage__btn">
      <button class="text-slate-400 border-solid text-2xl border-slate-400 border-2 py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline"
        @click="cancel" >
        <div class="">Annuler</div>
      </button>
      <button
        class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn"
        @click="save" >
        <ion-icon name="save-sharp" class="mr-2"></ion-icon>
        <span>Mettre à jour</span>
      </button>
    </div>
  
    <div class="flex mb-16">
      <label class="text-bg font-bold self-center" for="titre_poste">Titre du poste :</label>
      <input
        class="flex-grow shadow appearance-none border rounded py-4 px-3 mt-5 ml-4 leading-tight focus:outline-none focus:shadow-outline input"
        placeholder="Veuillez entrer le titre du poste"
        type="text"
        v-model="titre_poste"
        required
      />
    </div>
  
    <section class="bg-white p-10 DemandeStage__section">
      <div>
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="nom_entreprise">Nom de l'entreprise</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Veuillez entrer le nom de l'entreprise!"
            type="text"
            v-model="nom_entreprise"
            required
          />
        </div>


        <h3>Informations sur l'entreprise</h3>
        <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="description_entreprise">Courte présentation de l'entreprise</label>
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici une courte présentation de l'entreprise"
                type="text"
                v-model="description_entreprise"
                required
              />
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="city_entreprise"
                >Ville</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici la ville de l'entreprise"
                type="text"
                v-model="city_entreprise"
                required
              />
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="phone_entreprise"
                >Numéro de téléphone de l'entreprise :</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici le numéro de téléphone de l'entreprise"
                type="text"
                v-model="phone_entreprise"
                required
              />
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="email_entreprise">Courriel de l'entreprise</label>
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici le courriel de l'entreprise"
                type="text"
                v-model="email_entreprise"
                required
              />
            </div>
          </div>
        </div>
      </div>

   
      </div>
  
      
  
      <div class="DemandeStage__section__info__item">
        <div class="mb-16">
          <label class="text-bg font-bold" for="requiredSkills">Compétences requises</label>
          <textarea
            class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="HTML, CSS, JavaScript, React, vue.js, GIT, PHP, MySQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum, facilisis eros, ut dapibus quam hendrerit nec."
            name="requiredSkills"
            cols="20"
            rows="4"
            v-model="requiredSkills"
          ></textarea>
        </div>
      </div>
  
      <h3>Informations sur l'offre de stage</h3>
      <div class="grid grid-cols-12 gap-5 my-8 mb-20 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">


          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="province"
                >province</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="province"
                type="text"
                v-model="province"
                required
              />
            </div>
          </div>




          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="weeklyWorkHours"
                >weeklyWorkHours</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="weeklyWorkHours"
                type="text"
                v-model="weeklyWorkHours"
                required
              />
            </div>


          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="Salary"
                >Salary</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="Salary"
                type="text"
                v-model="Salary"
                required
              />
            </div>
          </div>
        </div>


        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">


          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="internshipType"
                >internshipType</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="internshipType"
                type="text"
                v-model="internshipType"
                required
              />
            </div>
          </div>



          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="paid"
                >paid</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="paid"
                type="text"
                v-model="paid"
                required
              />
            </div>
          </div>



          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="ets_scolaire"
                >startDate</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                type="date"
                value="2022-05-25"
                v-model="date_debut"
                required
              />
            </div>
          </div>


          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="date_fin">endDate</label>
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                value="2022-05-25"
                type="date"
                v-model="date_fin"
                required
              />
            </div>
          </div>
        </div>

      </div>
  
     
  
    </section>
  
    <div class="DemandeStage__btn">
      <button
        class="text-slate-400 border-solid text-2xl border-slate-400 border-2 py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline"
        @click="cancel"
      >
        <div class="">Annuler</div>
      </button>
      <button
        class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn"
        @click="save"
      >
        <ion-icon name="save-sharp" class="mr-2"></ion-icon>
        <span>Mettre à jour</span>
      </button>
    </div>
  </template>
  <script setup>
import { computed, reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import useUtile from "../composables/utile.js";

import BtnBase from "../components/BtnBase.vue";
import InputEnterprise from "@/components/InputEnterprise.vue";
import ModalSuppression from "@/components/ModalSuppression.vue";
import modalLoader from "@/components/ModalLoader.vue";

import internshipOffersServices from "../services/internshipOffers/internshipOffersServices";
import EnterpriseService from "../services/enterprises/enterprisesServices";
import ProvinceService from "../services/provinces/provincesServices";
import internshipTypesServices from "../services/internshipTypes/internshipTypesServices";

const route = useRoute();
const router = useRouter();
//const { validateEmail, validatePhone, validatePostalCode } = useUtile();
const { objet, getInternshipOffereById, addInternshipOffer, editInternshipOffer, deleteEnterprise } = internshipOffersServices();
const { enterpriseListe, allEnterprises } = EnterpriseService();
const { provincesListe, allProvinces } = ProvinceService();
const { internshipTypesListe, allInternshipTypes } = internshipTypesServices();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;
const isEditOrCreate = ref(false);

const offre = ref({});
const enterprise = ref({});
const typeoffre = ref([]);
const provinces = ref([]);

const isQueryError = ref(false);
const isLoadedProvinces = ref(false);
const isLoadedTypeOffre = ref(false);
const isLoadedEnterprise = ref(false);
const isLoadedOffre = ref(false);

const isLoading = computed(() => !isLoadedProvinces || !isLoadedTypeOffre || !isLoadedEnterprise  || !isLoadedOffre); // TODO corriger
const isOpenModalLoading = ref(false);

const isOpenModalSuppression = ref(false);
// console.log("id", _id);
// console.log("route.params", route.params);

const isError = reactive({

  titleOffre: false,
  descriptionOffre: false,
  entrepriseOffre: false,
  startDateOffre: false,
  endDateOffre: false,
  weeklyWorkHoursOffre: false,
  salaryOffre: false,
  provinceOffre: false,
  requiredSkillsOffre: false,
  internshipType: false,
  paid: false,
});

const theBtnValidateTitle = computed(() => {
  if (_id === "new") return "Ajouter";
  else return "Mettre à jour";
});

function onValidate(e) {
  e.preventDefault();
  console.log("onValidate");

  if (!offre.value.title || offre.value.title === "") isError.titleOffre = true;
  else isError.titleOffre = false;

  if (!offre.value.description || offre.value.description === "") isError.descriptionOffre = true;
  else isError.descriptionOffre = false;
  
  if (!offre.value.entreprise) isError.entrepriseOffre = true;
  else isError.entrepriseOffre = false;

  if (!offre.value.startDate || offre.value.startDate === "") isError.startDateOffre = true;
  else isError.startDateOffre = false;

  if (!offre.value.endDate || offre.value.endDate === "") isError.endDateOffre = true;
  else isError.endDateOffre = false;
  
  if (!offre.value.weeklyWorkHours || offre.value.weeklyWorkHours === "") isError.weeklyWorkHoursOffre = true;
  else isError.weeklyWorkHoursOffre = false;

  if (!offre.value.salary || offre.value.salary === "") isError.salaryOffre = true;
  else isError.salaryOffre = false;

  if (!offre.value.province) isError.provinceOffre = true;
  else isError.provinceOffre = false;

  if (!offre.value.requiredSkills || offre.value.requiredSkills === "") isError.requiredSkillsOffre = true;
  else isError.requiredSkillsOffre = false;

  if (!offre.value.internshipType) isError.internshipType = true;
  else isError.internshipType = false;

  if (!offre.value.paid || offre.value.paid === "") isError.paid = true;
  else isError.paid = false;


  console.log("isError", isError);
  console.log("offre.value", offre.value);

  if (Object.values(isError).every((result) => !result)) {
    console.log("POST/PATCH", offre.value);
    if (_id === "new") {
      console.log("vers le POST");
      addInternshipOffer(offre.value);
      offre.value = {};
    } else {
      console.log("vers le PATCH");
      editInternshipOffer(offre.value);
    }
  }
}

function onUpdate() {
  router.push({ path: `/OffredeStageDetail/${offre.value._id}/update` });
}

function onReset(e) {
  e.preventDefault();
  console.log("onReset");
  offre.value = {};
}

function onGoToListe() {
  router.push({ name: "OffredeStage" });
}

function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete(e) {
  deleteInternshipOffer(_id);
  isOpenModalSuppression.value = false;
}

function onGoToView(e) {
  e.preventDefault();
  isEditOrCreate.value = false;
  router.push({ path: `/OffredeStageDetail/${_id}` });
}

onMounted(() => {
  if (_id === "new") {
    isEditOrCreate.value = true;
  } else {
    getInternshipOffereById(_id);
    if (isUpdate) isEditOrCreate.value = true;
  }

  allProvinces();
  allInternshipTypes();
  allEnterprises();

});

watchEffect(() => {
  if (Object.keys(objet.value).length !== 0) {
    offre.value = objet.value; // Assigner directement la valeur
    console.log("offre", offre.value);
    isLoadedOffre.value = true;
    if (offre.value.statusCode) isQueryError.value = true;
  }
});

watchEffect(() => {
  if (Array.isArray(enterpriseListe.value)) {
    enterprise.value = [...enterpriseListe.value];
    isLoadedEnterprise.value = true;
    // console.log("provinces", provinces.value);
  }
});

watchEffect(() => {
  if (Array.isArray(internshipTypesListe.value)) {
    provinces.value = [...internshipTypesListe.value];
    isLoadedProvinces.value = true;
    // console.log("provinces", provinces.value);
  }
});
watchEffect(() => {
  if (Array.isArray(activityListe.value)) {
    typeoffre.value = [...activityListe.value];
    isLoadedTypeOffre.value = true;
    // console.log("activitiesSector", activitiesSector.value);
  }
});
  </script>
  