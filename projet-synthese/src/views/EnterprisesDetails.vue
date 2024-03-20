<template>
  <section class="bg-slate-100 page-padding">
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
            <option v-for="activity in activitiesSectorForSelect" :key="activity._id" :value="activity">{{ activity.value }}</option>
          </select>
          <p v-if="isError.activitySector" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez choisir un secteur d'activité</p>
        </div>
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
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.address" name="address" :is-error="isError.address" label="Adresse" :is-edit="isEditOrCreate" />
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.phone" name="phone" :is-error="isError.phone" label="Téléphone" :is-edit="isEditOrCreate" />
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.city" name="city" :is-error="isError.city" label="Ville" :is-edit="isEditOrCreate" />
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.email" name="email" :is-error="isError.email" label="Courriel" :is-edit="isEditOrCreate" />
          <div class="col-span-12 md:col-span-6 border-l-8 border-l-gray-600 px-4">
        <div class="text-gray-600 mb-4 text-2xl">Province</div>
        <div v-if="enterprise.province">
          <div v-if="!isEditOrCreate" class="text-gray-400">{{ enterprise.province.value }}</div>
          <div v-else>
            <label class="hidden" for="province">Province:</label>
            <select class="block w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="province" name="province" v-model="enterprise.province">
              <option v-for="province in provincesForSelect" :key="province._id" :value="province">{{ province.value }}</option>
            </select>
            <p v-if="isError.province" class="text-red-500 text-xs italic">Veuillez choisir une province</p>
          </div>
        </div>
      </div>
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.website" name="website" :is-error="isError.website" label="Site Web" :is-edit="isEditOrCreate" />
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.postalCode" name="postalCode" :is-error="isError.postalCode" label="Code postal" :is-edit="isEditOrCreate" />
          <InputEnterprise class="col-span-12 md:col-span-6" v-model="enterprise.image" name="image" :is-error="isError.image" label="URL du logo" :is-edit="isEditOrCreate" />
        </div>
      </div>

      <div class="flex justify-end gap-x-5">
        <!-- TODO ajouter icone au bouton  -->
        <BtnBase title="Annuler" color="#f9cb40" outline :action="onReset" />
        <BtnBase title="Sauvegarder" color="#f9cb40" :action="onValidate" />
        <!-- TODO copier les bouton en haut -->
      </div>
    </form>
  </section>
</template>
<script setup>
import { reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";

import BtnBase from "../components/BtnBase.vue";
import InputEnterprise from "@/components/InputEnterprise.vue";

import EnterpriseService from "../services/enterprises/enterprisesServices";
import ProvinceService from '../services/provinces/provincesServices';
import ActivityServices from '../services/activitySectors/activitySectorsServices';

const route = useRoute();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;

console.log("id", _id);
console.log("route.params", route.params);

const isEditOrCreate = ref(false);
const enterprise = ref({});

const { objet, getEntrepriseById } = EnterpriseService();

const { activityListe, allActivitySectors} = ActivityServices();
const activitiesSectorForSelect = ref([]);

const {provincesListe, allProvinces } = ProvinceService();
const provincesForSelect = ref([]);

onMounted(() => {
  getEntrepriseById(_id);
  allActivitySectors();
  allProvinces();
});

watchEffect(() => {
  if (Object.keys(objet.value).length !== 0) {
    enterprise.value = objet.value; // Assigner directement la valeur
    console.log(enterprise.value);
  }
});

watchEffect(() => {
  if (Array.isArray(activityListe.value)) {
    activitiesSectorForSelect.value = [...activityListe.value];
    console.log(activitiesSectorForSelect.value);
  }
});

watchEffect(() => {
  if (Array.isArray(provincesListe.value)) {
    provincesForSelect.value = [...provincesListe.value];
    console.log(provincesForSelect.value);
  }
});

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
  image: false,
});

function onValidate(e) {
  e.preventDefault();

  if (enterprise.name === "") isError.enterpriseName = true;
  else isError.enterpriseName = false;

  if (!enterprise.activitySector === "") isError.activitySector = true;
  else isError.activitySector = false;

  if (enterprise.description === "") isError.description = true;
  else isError.description = false;

  if (enterprise.address === "") isError.address = true;
  else isError.address = false;

  if (enterprise.phone === "") isError.phone = true;
  else isError.phone = false;

  if (enterprise.city === "") isError.city = true;
  else isError.city = false;

  if (enterprise.email === "") isError.email = true;
  else isError.email = false;

  if (!enterprise.province === "") isError.province = true;
  else isError.province = false;

  if (enterprise.website === "") isError.website = true;
  else isError.website = false;

  if (enterprise.postalCode === "") isError.postalCode = true;
  else isError.postalCode = false;

  if (enterprise.image === "") isError.image = true;
  else isError.image = false;

  console.log(Object.values(isError));

  if (Object.values(isError).every((result) => !result)) {
    // si passe la validation do ->
    console.log(enterprise);
    // TODO matcher avec service POST or PATCH
    if(enterprise.id == 0){
      const service = EnterpriseService();
      service.addEnterprises();
    }else{
      const service = EnterpriseService();
      service.editEnterprises(enterprise);
    }
    // if id == 0 -> POST
    // else Patch
  }
}

function onReset(e) {
  e.preventDefault();
  console.log("onReset");
}

function setEnterprise(enterprise) {
  console.log("setEnterprise", enterprise);
}

function setActivitiesSectorForSelect(activitiesSector) {
  console.log("setActivitiesSectorForSelect", activitiesSector);
}

function setProvinces(provinces) {
  console.log("setProvinces", provinces);
}

function load() {
  /*
  Explication de ma logique
    si id === 0 on ajoute une entreprise
    si id !== 0 on consulte ou modifie
    si le params update est présent on modifie
  */

  if (_id === "0") isEditOrCreate.value = true;
  else {
    // TODO getEntreprise(_id)
    // setEnterprise(enterprise);
    if (isUpdate) isEditOrCreate.value = true;
    // TODO mettre message si _id n'existe pas
  }
  // TODO Ajouter des secteurs d'activité, car il y en a juste 2!
  // TODO getActivitiesSector()
  //setActivitiesSectorForSelect(activitiesSector);
  // TODO getProvinces()
  //setProvinces()
}
load();

</script>
<style scoped>
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
