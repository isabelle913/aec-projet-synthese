<template>
  <section class="bg-slate-100 page-padding">
    <form>
      <!-- Entête -->
      <div v-if="!isEditOrCreate" class="presentation-title-border mb-20">
        <div class="ml-4">
          <div class="text-gray-600">Candidat</div>
          <div class="text-gray-600 text-6xl mb-10">{{ candidate.firstName }}</div>
          <div class="text-gray-600 bg-white py-2 px-4 inline text-2xl">{{ candidat.titre }}</div>
        </div>
      </div>
      <div v-else class="mb-20">
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="enterpriseName">Nom du candidat:</label>
          <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="candidatName" name="candidatName" type="text" v-model="candidat.name" />
          <p v-if="isError.candidatName" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom du candidat</p>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <label class="col-span-3 text-gray-600 text-2xl mr-4" for="titreSector">Titre:</label>
          <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="candidatTitre" name="candidatTitre" type="text" v-model="candidat.titre" />
          <p v-if="isError.candidatTitre" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le titre du candidat</p>
        </div>
      </div>
      <!-- corps -->
      <div class="bg-white page-padding">
        <!-- 1er partie -->
        <div class="presentation-body-title text-6xl mb-10">Courte présentation</div>
        <div v-if="!isEditOrCreate" class="text-2xl">{{ candidat.description }}</div>
        <div v-else>
          <label class="hidden" for="description">Description</label>
          <textarea class="w-full border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="description" name="description" v-model="enterprise.description" placeholder="Inscrire une description" />
          <p v-if="isError.candidatName" class="col-start-4 col-span-9 text-red-500 text-xs italic">Veuillez inscrire le nom du candidat</p>
        </div>
        <div class="presentation-body-title text-2xl my-10">Informations</div>

        <!-- 2e partie -->
        <div class="grid grid-cols-12 gap-8">
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.address" name="address" :is-error="isError.address" label="Adresse" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.phone" name="phone" :is-error="isError.phone" label="Téléphone" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.city" name="city" :is-error="isError.city" label="Ville" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.email" name="email" :is-error="isError.email" label="Courriel" :is-edit="isEditOrCreate" />
          <div class="col-span-12 md:col-span-6 border-l-8 border-l-gray-600 px-4">
            <div class="text-gray-600 mb-4 text-2xl">Province</div>
            <div v-if="!isEditOrCreate" class="text-gray-400">{{ candidat.province.value }}</div>
            <div v-else>
              <label class="hidden" for="province">Province:</label>
              <select class="block w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="province" name="province" v-model="enterprise.province">
                <option v-for="province in provincesForSelect" :key="province._id" :value="province">{{ province.value }}</option>
              </select>
              <p v-if="isError.province" class="text-red-500 text-xs italic">Veuillez choisir une province</p>
            </div>
          </div>
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.postalCode" name="postalCode" :is-error="isError.postalCode" label="Code postal" :is-edit="isEditOrCreate" />
          <InputCandidat class="col-span-12 md:col-span-6" v-model="candidat.image" name="image" :is-error="isError.image" label="URL du logo" :is-edit="isEditOrCreate" />
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
import { computed, reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import BtnBase from "../components/BtnBase.vue";
import InputCandidat from "@/components/InputCandidat.vue";

const route = useRoute();

const isEditOrCreate = ref(false);

// TODO effacer éventuellement
const enterprise = {
  _id: "7",
  image: "https://assets.ezmax.ca/Logo_VD_e_Zmax_2124845685.png",
  name: "eZmax", //ok
  address: "2500, boul. Daniel-Johnson, bureau 800 , Québec ", //ok
  postalCode: "H7T 2P6",
  city: "Laval", //ok
  province: {
    //ok
    idProvince: "1",
    value: "Québec",
  },
  phone: "1-844-403-9629", //ok
  email: "marketing@ezmax.ca", //ok
  description: "Les Solutions eZmax inc. se spécialise dans la conception d’applications d’affaires innovantes et optimisées.",
  activitySector: {
    //ok
    idActivitySector: "1",
    value: "Informatique",
  },
  website: "https://www.ezmax.ca", //ok
};

const isError = reactive({
  candidatName: false,
  candidatTitre: false,
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



// TODO éventuellement remplir avec le get
const provincesForSelect = [
  {
    _id: "65c255fb7e4d2a499b409ca0",
    value: "QUEBEC",
  },
  {
    _id: "65c2571497ac7ec38f58695e",
    value: "ONTARIO",
  },
  {
    _id: "65c275696d55606cc56d38e7",
    value: "BRITISH COLUMBIA",
  },
  {
    _id: "65c275736d55606cc56d38ea",
    value: "ALBERTA",
  },
  {
    _id: "65c2757f6d55606cc56d38ed",
    value: "MANITOBA",
  },
  {
    _id: "65c275896d55606cc56d38f0",
    value: "SASKATCHEWAN",
  },
  {
    _id: "65c275996d55606cc56d38f3",
    value: "NEW BRUNSWICK",
  },
  {
    _id: "65c275a66d55606cc56d38f6",
    value: "NOVA SCOTIA",
  },
  {
    _id: "65c275b16d55606cc56d38f9",
    value: "PRINCE EDWARD ISLAND",
  },
  {
    _id: "65c275c36d55606cc56d38fc",
    value: "YUKON",
  },
  {
    _id: "65c275cf6d55606cc56d38ff",
    value: "NORTHWEST TERRITORIES",
  },
  {
    _id: "65c275d76d55606cc56d3902",
    value: "NUNAVUT",
  },
  {
    _id: "65e4de3747cf6b3671ee948e",
    value: "NEWFOUNDLAND AND LABRADOR",
  },
];

function onValidate(e) {
  e.preventDefault();

  if (candidat.name === "") isError.candidatName = true;
  else isError.candidatName = false;

  if (!candidat.titre) isError.titre = true; // TODO Vérifier
  else isError.titre = false;

  if (candidat.description === "") isError.description = true;
  else isError.description = false;

  if (candidat.address === "") isError.address = true;
  else isError.address = false;

  if (candidat.phone === "") isError.phone = true;
  else isError.phone = false;

  if (candidat.city === "") isError.city = true;
  else isError.city = false;

  if (candidat.email === "") isError.email = true;
  else isError.email = false;

  if (!candidat.province) isError.province = true; // TODO Vérifier
  else isError.province = false;

  if (candidat.postalCode === "") isError.postalCode = true;
  else isError.postalCode = false;

  if (candidat.image === "") isError.image = true;
  else isError.image = false;

  console.log(Object.values(isError));

  if (Object.values(isError).every((result) => !result)) {
    // si passe la validation do ->
    console.log(candidat);
    // TODO matcher avec service POST or PATCH
    // if id == 0 -> POST
    // else Patch
  }
}

function onReset(e) {
  e.preventDefault();
  console.log("onReset");
}

function setCandidat(candidat) {
  console.log("setCandidat", candidat);
}

function setTitre(titre) {
  console.log("setTitre", titre);
}

function setProvinces(provinces) {
  console.log("setProvinces", provinces);
}

function load() {
  /*
  Explication de ma logique
    si id === 0 on ajoute un candidat
    si id !== 0 on consulte ou modifie
    si le params update est présent on modifie
  */
  const _id = route.params.id;
  const isUpdate = route.params.action === "update" ? true : false;

  console.log("id", _id);
  console.log("route.params", route.params);

  if (_id === "0") isEditOrCreate.value = true;
  else {
    // TODO getCandidat(_id)
    // setCandidat(candidat);
    if (isUpdate) isEditOrCreate.value = true;
    // TODO mettre message si _id n'existe pas
  }

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
  border-left: solid #9b5ba2 10px;
  /* TODO utiliser variable couleur */
}
.presentation-body-title {
  color: #9b5ba2;
}
</style>
