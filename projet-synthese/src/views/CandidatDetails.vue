<template>
  <section class="bg-slate-100 page-padding">
    <form>
      <!-- Entête -->
      <div v-if="!isEditOrCreate" class="presentation-title-border mb-15">
        <div class="ml-4">
          <h2 class="text-gray-600 text-base">Candidat</h2>
          <h3 class="text-gray-600 text-6xl mt-5 mb-10 font-semibold">{{ candidat.firstName }}</h3>
          <div class="text-gray-600 bg-white py-2 px-4 inline text-3xl">{{ candidat.skills ? candidat.skills[0] : "" }}</div>
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
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isEditOrCreate && _id !== 'ajouter'" title="Annuler" icon="close" color="#f9cb40" outline @click="onGoToView" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate && _id === 'ajouter'" title="Annuler" icon="close" color="#f9cb40" outline @click="onReset" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" color="#f9cb40" @click="onValidate" show-icon-only icon-color="green" />
        <BtnBase v-if="!isEditOrCreate" icon="edit_square" @click="onUpdate" show-icon-only icon-size="text-6xl" />
        <BtnBase v-if="!isEditOrCreate" icon="disabled_by_default" @click="onOpenModalSuppression" show-icon-only icon-color="red" icon-size="text-6xl" />
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
        <div class="presentation-body-title text-2xl my-10 font-bold">Informations personnelles</div>

        <!-- 2e partie -->
        <div class="grid grid-cols-12 gap-8">
          <InputCandidat class="col-span-12 md:col-span-6 font-bold" v-model="candidat.address" name="address" :is-error="isError.address" label="Adresse" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6 font-bold" v-model="candidat.phone" name="phone" :is-error="isError.phone" label="Téléphone" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6 font-bold" v-model="candidat.city" name="city" :is-error="isError.city" label="Ville" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6 font-bold" v-model="candidat.email" name="email" :is-error="isError.email" label="Courriel" :is-edit="isEditOrCreate" />
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
        <BtnBase v-if="isEditOrCreate && _id !== 'ajouter'" title="Annuler" icon="close" btn-class="btn-candidats__outline" outline :action="onGoToView" />
        <BtnBase v-if="isEditOrCreate && _id === 'ajouter'" title="Annuler" icon="close" btn-class="btn-candidats__outline" outline :action="onReset" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" btn-class="btn-candidats" :action="onValidate" />
        <BtnBase v-if="!isEditOrCreate" title="Modifier" icon="edit" btn-class="btn-candidats" :action="onUpdate" />
        <BtnBase v-if="!isEditOrCreate" title="Supprimer" icon="delete" btn-class="btn-candidats" :action="onOpenModalSuppression" />
        <BtnBase title="Retour à la liste des candidats" icon="list" btn-class="btn-candidats" :action="onGoToListe" />
      </div>
    </form>
  </section>

  <teleport to="body">
    <ModalSuppression v-model="isOpenModalSuppression" :description="candidat.firstName" :action="onDelete" @close="isOpenModalSuppression = false" />
  </teleport>

  <!--<teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
  -->
</template>
<script setup>
import { computed, reactive, ref, onMounted, watchEffect, watch } from "vue";
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
const { objet, getCandidateById, addCandidates, editCandidates, deleteCandidates } = CandidatesService();
const { provincesListe, allProvinces } = ProvinceService();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;
const isEditOrCreate = ref(false);

const candidat = ref({
  firstName: "",
  skills: "",
  description: "",
  address: "",
  phone: "",
  city: "",
  email: "",
  province: null,
  postalCode: "",
});
const skills = ref("");
const provinces = ref([]);

const isLoadedProvinces = ref(false);
const isLoadedCandidate = ref(false);

const isOpenModalSuppression = ref(false);

const isError = reactive({
  firstName: false,
  skills: false,
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

  // Réinitialisation des erreurs
  Object.keys(isError).forEach((key) => (isError[key] = false));

  // Validation des champs
  const requiredFields = ["firstName", "skills", "description", "address", "city", "email", "province", "postalCode", "phone"];

  requiredFields.forEach((field) => {
    if (!candidat.value[field]) {
      isError[field] = true;
    } else if (field === "phone" && !validatePhone(candidat.value[field])) {
      isError[field] = true;
    } else if (field === "email" && !validateEmail(candidat.value[field])) {
      isError[field] = true;
    } else if (field === "province" && !candidat.value[field]._id) {
      isError[field] = true;
    } else if (field === "postalCode" && !validatePostalCode(candidat.value[field])) {
      isError[field] = true;
    } else {
      isError[field] = false; // Réinitialiser l'erreur si le champ est valide
    }
  });

  // Ajout du last name qui n'est pas demandé dans les inputs qui respectent la maquette
  candidat.value.lastName = candidat.value.firstName;

  // Si aucune erreur de validation
  if (!Object.values(isError).some((error) => error)) {
    if (_id === "ajouter") {
      addCandidates(candidat.value);
    } else {
      editCandidates(candidat.value);
    }
    // Réinitialisation du formulaire
    if (_id === "ajouter") {
      candidat.value = {
        firstName: "",
        skills: "",
        description: "",
        address: "",
        phone: "",
        city: "",
        email: "",
        province: { _id: "", value: "" },
        postalCode: "",
      };
    }
    // Génération des compétences
    generateSkillsFromTitle(candidat.value.skills);

    // Redirection vers la liste des candidats
    setTimeout(() => {
      onGoToListe();
    }, 1500);
  }
}

function onUpdate() {
  router.push({ path: `/candidat/${candidat.value._id}/update` });
}

function onReset(e) {
  e.preventDefault();
  candidat.value = {
    firstName: "",
    skills: "",
    description: "",
    address: "",
    phone: "",
    city: "",
    email: "",
    province: null,
    postalCode: "",
  };
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
  setTimeout(() => {
    onGoToListe();
  }, 1500);
}

function onGoToView(e) {
  e.preventDefault();
  isEditOrCreate.value = false;
  router.push({ path: `/candidat/${_id}` });
}

function generateSkillsFromTitle(title) {
  // Séparer le titre en mots
  const words = title.split(" ");

  // Récupérer le premier mot (compétence)
  const firstSkill = words.length > 0 ? words[0] : "";

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
  if (objet && Object.keys(objet.value).length !== 0) {
    candidat.value = objet.value;
  }
});

watchEffect(() => {
  if (Array.isArray(provincesListe.value)) {
    provinces.value = [...provincesListe.value];
    isLoadedProvinces.value = true;
    // console.log("provinces", provinces.value);
  }
});
</script>

<style scoped>
.presentation-title-border {
  border-left: solid #9b5ba2 10px;
}
.presentation-body-title {
  color: #9b5ba2;
}

.presentation-title-border h2 {
  font-weight: 500;
  color: #707070;
  font-size: 2rem !important;
}
</style>
