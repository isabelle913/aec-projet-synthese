<template>
  <section v-if="!isQueryError" class="bg-slate-100 page-padding">
    <form>
      <!-- Entête -->
      <div v-if="!isEditOrCreate" class="presentation-title-border mb-20">
        <div class="ml-4">
          <div class="text-gray-600">Entreprise</div>
          <div class="text-gray-600 text-6xl mb-10">{{ enterprise.name }}</div>
          <div v-if="enterprise.activitySector" class="text-gray-600 bg-white py-2 px-4 inline text-2xl">{{ enterprise.activitySector.value }}</div>
        </div>
      </div>
      <div v-else class="mb-20">
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="enterpriseName">Nom de l'entreprise:</label>
          <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="enterpriseName" name="enterpriseName" type="text" v-model="enterprise.name" />
          <p v-if="isError.enterpriseName" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom de l'entreprise</p>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="activitySector">Secteur d'activité:</label>
          <select class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="activitySector" name="activitySector" v-model="enterprise.activitySector">
            <option v-for="activity in activitiesSector" :key="activity._id" :value="activity">{{ activity.value }}</option>
          </select>
          <p v-if="isError.activitySector" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez choisir un secteur d'activité</p>
        </div>
      </div>

      <!-- boutons -->
      <!-- TODO Valider les couleurs -->
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isEditOrCreate && _id !== 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onGoToView" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate && _id === 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onReset" show-icon-only icon-color="red" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" color="#f9cb40" :action="onValidate" show-icon-only icon-color="green" />
        <BtnBase v-if="!isEditOrCreate" title="Modifier" icon="edit" color="#f9cb40" :action="onUpdate" show-icon-only icon-color="#f9cb40" />
        <BtnBase v-if="!isEditOrCreate" title="Supprimer" icon="delete" color="#f9cb40" :action="onOpenModalSuppression" show-icon-only icon-color="red" />
      </div>

      <!-- corps -->
      <div class="bg-white page-padding">
        <!-- 1er partie -->
        <div class="presentation-body-title text-6xl mb-10">Courte présentation</div>
        <div v-if="!isEditOrCreate" class="text-2xl">{{ enterprise.description }}</div>
        <div v-else>
          <label class="hidden" for="description">Description</label>
          <textarea class="w-full border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="description" name="description" v-model="enterprise.description" placeholder="Inscrire une description" />
          <p v-if="isError.enterpriseName" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom de l'entreprise</p>
        </div>
        <div class="presentation-body-title text-2xl my-10">Informations</div>

        <!-- 2e partie -->
        <div class="grid grid-cols-12 gap-8">
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.address" name="address" :is-error="isError.address" label="Adresse" :is-edit="isEditOrCreate" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.phone" name="phone" :is-error="isError.phone" label="Téléphone" :is-edit="isEditOrCreate" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.city" name="city" :is-error="isError.city" label="Ville" :is-edit="isEditOrCreate" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.email" name="email" :is-error="isError.email" label="Courriel" :is-edit="isEditOrCreate" />

          <!-- Provinces -->
          <div class="col-span-12 md:col-span-6 border-l-8 border-l-gray-600 px-4">
            <div class="text-gray-600 mb-4 text-2xl">Province</div>
            <div>
              <div v-if="!isEditOrCreate && enterprise.province" class="text-gray-400">{{ enterprise.province.value }}</div>
              <div v-else>
                <label class="hidden" for="province">Province:</label>
                <select class="block w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="province" name="province" v-model="enterprise.province">
                  <option v-for="province in provinces" :key="province._id" :value="province">{{ province.value }}</option>
                </select>
                <p v-if="isError.province" class="text-red-500 text-xs italic">Veuillez choisir une province</p>
              </div>
            </div>
          </div>

          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.website" name="website" :is-error="isError.website" label="Site Web" :is-edit="isEditOrCreate" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.postalCode" name="postalCode" :is-error="isError.postalCode" label="Code postal" :is-edit="isEditOrCreate" />
          <!-- Image -->
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.image" name="image" :is-error="isError.image" label="URL du logo" :is-edit="isEditOrCreate" />
        </div>
      </div>

      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isEditOrCreate && _id !== 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onGoToView" />
        <BtnBase v-if="isEditOrCreate && _id === 'new'" title="Annuler" icon="close" color="#f9cb40" outline :action="onReset" />
        <BtnBase v-if="isEditOrCreate" :title="theBtnValidateTitle" icon="save" color="#f9cb40" :action="onValidate" />
        <BtnBase v-if="!isEditOrCreate" title="Modifier" icon="edit" color="#f9cb40" :action="onUpdate" />
        <BtnBase v-if="!isEditOrCreate" title="Supprimer" icon="delete" color="#f9cb40" :action="onOpenModalSuppression" />
        <BtnBase title="Retour à la liste des entreprises" icon="list" color="#f9cb40" :action="onGoToListe" />
      </div>
    </form>
  </section>

  <section v-else class="h-screen bg-slate-100 page-padding">
    <div class="h-full flex justify-center items-center">
      <div class="text-4xl text-center">Une erreur est survenue lors de la récupération des données</div>
    </div>
  </section>

  <teleport to="body">
    <ModalSuppression v-model="isOpenModalSuppression" :description="enterprise.name" :action="onDelete" @close="isOpenModalSuppression = false" />
  </teleport>

  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
</template>
<script setup>
import { computed, reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import useUtile from "../composables/utile.js";

import BtnBase from "../components/BtnBase.vue";
import InputEntreprise from "@/components/InputEntreprise.vue";
import ModalSuppression from "@/components/ModalSuppression.vue";
import Loader from "@/components/Loader.vue";

import EnterpriseService from "../services/enterprises/enterprisesServices";
import ProvinceService from "../services/provinces/provincesServices";
import ActivityServices from "../services/activitySectors/activitySectorsServices";

// TODO ajouté des * aux champs

const route = useRoute();
const router = useRouter();
const { validateEmail, validatePhone, validatePostalCode } = useUtile();
const { objet, getEntrepriseById, addEnterprises, editEnterprises, deleteEnterprise } = EnterpriseService();
const { provincesListe, allProvinces } = ProvinceService();
const { activityListe, allActivitySectors } = ActivityServices();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;
const isEditOrCreate = ref(false);

const enterprise = ref({});
const activitiesSector = ref([]);
const provinces = ref([]);

const isQueryError = ref(false);

const isLoadedProvinces = ref(false);
const isLoadedActivitiesSector = ref(false);
const isLoadedEnterprise = ref(false);

const isLoading = computed(() => {
  if (isLoadedProvinces.value && isLoadedActivitiesSector.value && isLoadedEnterprise.value) return false;
  else return true;
});

const isOpenModalSuppression = ref(false);

const isError = reactive({
  enterpriseName: false,
  activitySector: false,
  description: false,
  address: false,
  phone: false,
  city: false,
  email: false,
  province: false,
  website: false,
  postalCode: false,
  // image: false,
});

const theBtnValidateTitle = computed(() => {
  if (_id === "new") return "Ajouter";
  else return "Mettre à jour";
});

function onValidate(e) {
  e.preventDefault();
  console.log("onValidate");

  if (!enterprise.value.name || enterprise.value.name === "") isError.enterpriseName = true;
  else isError.enterpriseName = false;

  if (!enterprise.value.activitySector) isError.activitySector = true;
  else isError.activitySector = false;

  if (!enterprise.value.description || enterprise.value.description === "") isError.description = true;
  else isError.description = false;

  if (!enterprise.value.address || enterprise.value.address === "") isError.address = true;
  else isError.address = false;

  if (!validatePhone(enterprise.value.phone)) isError.phone = true;
  else isError.phone = false;

  if (!enterprise.value.city || enterprise.value.city === "") isError.city = true;
  else isError.city = false;

  if (!validateEmail(enterprise.value.email)) isError.email = true;
  else isError.email = false;

  if (!enterprise.value.province) isError.province = true;
  else isError.province = false;

  if (enterprise.value.website === "") isError.website = true;
  else isError.website = false;

  if (!validatePostalCode(enterprise.value.postalCode)) isError.postalCode = true;

  console.log("isError", isError);
  console.log("enterprise.value", enterprise.value);

  if (Object.values(isError).every((result) => !result)) {
    console.log("POST/PATCH", enterprise.value);
    if (_id === "new") {
      console.log("vers le POST");
      addEnterprises(enterprise.value);
      enterprise.value = {};
    } else {
      console.log("vers le PATCH");
      editEnterprises(enterprise.value);
    }
  }
}

function onUpdate() {
  router.push({ path: `/entreprise/${enterprise.value._id}/update` });
}

function onReset(e) {
  e.preventDefault();
  console.log("onReset");
  enterprise.value = {};
}

function onGoToListe() {
  router.push({ name: "entreprises" });
}

function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete(e) {
  deleteEnterprise(_id);
  isOpenModalSuppression.value = false;
}

function onGoToView(e) {
  e.preventDefault();
  isEditOrCreate.value = false;
  router.push({ path: `/entreprise/${_id}` });
}

onMounted(() => {
  if (_id === "new") {
    isEditOrCreate.value = true;
  } else {
    getEntrepriseById(_id);
    if (isUpdate) isEditOrCreate.value = true;
  }

  allProvinces();
  allActivitySectors();
});

watchEffect(() => {
  if (Object.keys(objet.value).length !== 0) {
    enterprise.value = objet.value; // Assigner directement la valeur
    // console.log("entreprise", entreprise.value);
    isLoadedEnterprise.value = true;
    if (enterprise.value.statusCode) isQueryError.value = true;
  }
});
watchEffect(() => {
  if (Array.isArray(provincesListe.value)) {
    provinces.value = [...provincesListe.value];
    isLoadedProvinces.value = true;
    // console.log("provinces", provinces.value);
  }
});
watchEffect(() => {
  if (Array.isArray(activityListe.value)) {
    activitiesSector.value = [...activityListe.value];
    isLoadedActivitiesSector.value = true;
    // console.log("activitiesSector", activitiesSector.value);
  }
});
</script>

<style scoped>
/* TODO déplacer css */
.page-padding {
  padding: 3rem;
}
.presentation-title-border {
  border-left: solid #f9cb40 10px;
  /* TODO utiliser variable couleur */
}
.presentation-body-title {
  color: #f9cb40;
}
</style>
../composables/utile.js
