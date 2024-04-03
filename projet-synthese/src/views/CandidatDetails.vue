<template>
  <section class="bg-slate-100 page-padding">
    <form>
      <!-- Entête -->
      <div v-if="!isEditOrCreate" class="presentation-title-border mb-20">
        <div class="ml-4">
          <h2 class="text-gray-600">Candidat</h2>
          <div class="text-gray-600 text-6xl mb-10">{{ candidat.firstName }}</div>
          <div class="text-gray-600 bg-white py-2 px-4 inline text-2xl">{{  candidat.skills ? candidat.skills[0] : '' }}</div>
        </div>
      </div>
      <div v-else class="mb-20">
        <div class="presentation-title-border mb-20">
          <h2 class="pl-8">Ajouter un candidat</h2>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="firstName">Nom et prénom:</label>
          <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="firstName" name="firstName" type="text" v-model="candidat.firstName" />
          <p v-if="isError.firstName" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom du candidat</p>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="description">Poste:</label>
          <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="skills" name="skills" type="text" v-model="candidat.skills" />
          <p v-if="isError.skills" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le titre du candidat</p>
        </div>
      </div>
            <!-- boutons -->
      <!-- TODO Valider les couleurs -->
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isEditOrCreate && _id !== 'ajouter'" title="Annuler" icon="close" color="#f9cb40" outline :action="onGoToView" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate && _id === 'ajouter'" title="Annuler" icon="close" color="#f9cb40" outline :action="onReset" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" color="#f9cb40" :action="onValidate" show-icon-only icon-color="green" />
        <BtnBase v-if="!isEditOrCreate" title="Modifier" icon="edit" color="#f9cb40" :action="onUpdate" show-icon-only icon-color="#f9cb40" />
        <BtnBase v-if="!isEditOrCreate" title="Supprimer" icon="delete" color="#f9cb40" :action="onOpenModalSuppression" show-icon-only icon-color="red" />
      </div>

      <!-- corps -->
      <div class="bg-white page-padding">
        <!-- 1er partie -->
        <div class="presentation-body-title text-6xl mb-10">Courte présentation</div>
        <div v-if="!isEditOrCreate" class="text-2xl">{{ candidat.description }}</div>
        <div v-else>
          <label class="hidden" for="description">Description</label>
          <textarea class="w-full border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="description" name="description" v-model="candidat.description" placeholder="Inscrire une description"></textarea>
          <p v-if="isError.description" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom du candidat</p>
        </div>
        <div class="presentation-body-title text-2xl my-10">Informations personnelles</div>

        <!-- 2e partie -->
        <div class="grid grid-cols-12 gap-8">
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.address" name="address" :is-error="isError.address" label="Adresse" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.phone" name="phone" :is-error="isError.phone" label="Téléphone" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.city" name="city" :is-error="isError.city" label="Ville" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.email" name="email" :is-error="isError.email" label="Courriel" :is-edit="isEditOrCreate" />
          <!-- Provinces -->
          <div class="col-span-12 md:col-span-6 border-l-8 border-l-gray-600 px-4">
            <div class="text-gray-600 mb-4 text-2xl">Province</div>
            <div>
              <div v-if="!isEditOrCreate && candidat.province" class="text-gray-400">{{ candidat.province.value }}</div>
              <div v-else>
                <label class="hidden" for="province">Province:</label>
                <select class="block w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="province" name="province" v-model="candidat.province">
                  <option v-for="province in provinces" :key="province._id" :value="province">{{ province.value }}</option>
                </select>
                <p v-if="isError.province" class="text-red-500 text-xs italic">Veuillez choisir une province</p>
              </div>
            </div>
          </div>
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.postalCode" name="postalCode" :is-error="isError.postalCode" label="Code postal" :is-edit="isEditOrCreate" />
        </div>
      </div>

      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isEditOrCreate && _id !== 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onGoToView" />
        <BtnBase v-if="isEditOrCreate && _id === 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onReset" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" color="#f9cb40" :action="onValidate" />
        <BtnBase v-if="!isEditOrCreate" title="Modifier" icon="edit" color="#f9cb40" :action="onUpdate" />
        <BtnBase v-if="!isEditOrCreate" title="Supprimer" icon="delete" color="#f9cb40" :action="onOpenModalSuppression" />
        <BtnBase title="Retour à la liste des candidats" icon="list" color="#f9cb40" :action="onGoToListe" />
      </div>
    </form>
  </section>
  <!--
  <section v-else class="h-screen bg-slate-100 page-padding">
    <div class="h-full flex justify-center items-center">
      <div class="text-4xl text-center">Une erreur est survenue lors de la récupération des données</div>
    </div>
  </section>
  -->

  <teleport to="body" v-if="candidat.value">
  <ModalSuppression v-model="isOpenModalSuppression" :description="candidat.value.name" :action="onDelete" @close="isOpenModalSuppression = false" />
</teleport>


    <!--<teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
  -->
</template>
<script setup>
import { computed, reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import useUtile from "../composables/utile.js";

import BtnBase from "../components/BtnBase.vue";
import ModalSuppression from "@/components/ModalSuppression.vue";
import Loader from "@/components/Loader.vue";

import InputCandidat from "@/components/InputCandidat.vue";
import CandidatesService from "@/services/candidates/candidatesServices";
import ProvinceService from "../services/provinces/provincesServices";

const route = useRoute();
const router = useRouter();

const { validateEmail, validatePhone, validatePostalCode } = useUtile();
const { object, getCandidateById, addCandidates, editCandidates, deleteCandidates } = CandidatesService();
const { provincesListe, allProvinces } = ProvinceService();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;
const isEditOrCreate = ref(false);

const candidat = ref({});
const skills = ref({});
const provinces = ref([]);


const isQueryError = ref(false);

const isLoadedProvinces = ref(false);
const isLoadedCandidate = ref(false);

const isLoading = computed(() => {
  if (_id === "ajouter") return false;
  if (isLoadedProvinces.value &&  isLoadedCandidate.value) return false;
  else return true;
});

const isOpenModalSuppression = ref(false);

const isError = reactive({
  firstName: false,
  description: false,
  address: false,
  phone: false,
  city: false,
  email: false,
  province: false,
  postalCode: false,
});

const theBtnValidateTitle = computed(() => {
  if (_id === "ajouter") return "Ajouter";
  else return "Mettre à jour";
});

function onValidate(e) {
  e.preventDefault();
  console.log("onValidate");

  if (candidat.firstName === "") isError.firstName = true;
  else isError.firstName = false;

  if (candidat.description === "") isError.description = true;
  else isError.description = false;

  if (candidat.address === "") isError.address = true;
  else isError.address = false;

  if (!validatePhone(candidat.phone)) isError.phone = true;
  else isError.phone = false;

  if (candidat.city === "") isError.city = true;
  else isError.city = false;

  if (!validateEmail(candidat.email)) isError.email = true;
  else isError.email = false;

  if (!candidat.province) isError.province = true;
  else isError.province = false;

  if (!validatePostalCode(candidat.postalCode)) isError.postalCode = true;

  if (Object.values(isError).every((result) => !result)) {
    console.log("POST/PATCH", candidat.value);
    if (_id === "ajouter") {
      console.log("vers le POST");
      addCandidates(candidat.value);
      candidat.value = {};
    } else {
      console.log("vers le PATCH");
      editCandidates(_id, candidat.value); 
    }
  }
  if (Object.values(isError).every((result) => !result)) {
  generateSkillsFromTitle(candidat.skills);
}
}

function onUpdate() {
  router.push({ path: `/candidats/${candidat.value._id}/update` });
}

function onReset(e) {
  e.preventDefault();
  console.log("onReset");
  candidat.value = {};
}

function onGoToListe() {
  router.push({ name: "candidats" });
}

function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete(e) {
  deleteCandidates(_id);
  isOpenModalSuppression.value = false;
}

function onGoToView(e) {
  e.preventDefault();
  isEditOrCreate.value = false;
  router.push({ path: `/candidats/${_id}` });
}

function generateSkillsFromTitle(title) {
  // Séparer le titre en mots
  const words = title.split(' ');

  // Récupérer le premier mot (compétence)
  const firstSkill = words.length > 0 ? words[0] : '';

  // Assigner la compétence
  skills.value = firstSkill;
}



onMounted(() => {
  if (_id === "ajouter") {
    isEditOrCreate.value = true;
  } else {
    getCandidateById(_id);
    if (isUpdate) isEditOrCreate.value = true;
  }
  allProvinces();
});


watchEffect(() => {
  if (object && Object.keys(object.value).length !== 0) {
    candidat.value = object.value;
    isLoadedCandidate.value = true;
    if (candidat.value.statusCode) isQueryError.value = true;
  }
});

watchEffect(() => {
  if (Array.isArray(provincesListe.value)) {
    provinces.value = [...provincesListe.value];
    isLoadedProvinces.value = true;
    console.log("provinces", provinces.value);
  }
});
</script>
<style scoped>
.page-padding {
  padding: 3rem;
}
.presentation-title-border {
  border-left: solid #9b5ba2 10px;
}
.presentation-body-title {
  color: #9b5ba2;
}

.presentation-title-border h2 {
  font-weight: bold;
  color:#707070;
}
</style>
