<template>
  <section v-if="!isQueryError" class="bg-slate-100 page-padding">
    <!-- entête haut -->
    <div class="flex items-center">
      <div v-if="!isNewStep" class="flex-none w-64 pr-8">
        <img src="../assets/images/estage-logo.png" alt="Logo de l'entreprise" />
      </div>
      <div class="flex-auto">
        <div class="presentation-title-border">
          <div class="ml-4">
            <div v-if="!isNewStep" class="text-gray-600">Entreprise</div>
            <div class="text-gray-600 text-6xl mb-10">{{ !isNewStep ? enterprise.name : "Ajouter une entreprise" }}</div>
          </div>
        </div>
      </div>
    </div>

    <form>
      <!-- boutons haut -->
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase v-if="isViewStep" icon="Done" :action="onWhatFor" show-icon-only icon-color="green" icon-size="text-6xl" />
        <BtnBase v-if="isViewStep" icon="edit_square" :action="onUpdate" show-icon-only icon-size="text-6xl" />
        <BtnBase v-if="isViewStep" icon="disabled_by_default" :action="onOpenModalSuppression" show-icon-only icon-color="red" icon-size="text-6xl" />

        <!-- onUpdate or new -->
        <BtnBase v-if="!isViewStep" title="Annuler" icon="close" outline btn-class="btn-entreprise__outline" :action="onGoToListe" />
        <BtnBase v-if="!isViewStep" :title="isNewStep ? 'Sauvegarder' : 'Mettre à jour'" icon="save" btn-class="btn-entreprise" :action="onValidate" />
      </div>

      <!-- Entête -->
      <div v-if="!isViewStep" class="flex items-center">
        <div class="flex-auto">
          <div class="mb-20">
            <div class="grid grid-cols-12 mb-3">
              <label class="col-span-3 text-gray-600 text-2xl mr-4" for="enterpriseName">Nom de l'entreprise: *</label>
              <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="enterpriseName" name="enterpriseName" type="text" v-model="enterprise.name" />
              <p v-if="isError.enterpriseName" class="col-start-4 col-span-9 text-red-500 text-base italic">Veuillez inscrire le nom de l'entreprise</p>
            </div>
            <div class="grid grid-cols-12 mb-3">
              <label class="col-span-3 text-gray-600 text-2xl mr-4" for="enterpriseName">Logo:</label>
              <input class="col-span-9 border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-800" id="enterpriseLogo" name="enterpriseLogo" type="text" v-model="enterpriseLogo" />
            </div>
          </div>
        </div>
      </div>

      <!-- corps -->
      <div class="bg-white page-padding">
        <!-- 1er partie -->
        <div class="presentation-body-title text-6xl mb-10">Courte présentation</div>
        <div v-if="isViewStep" class="text-2xl">{{ enterprise.description }}</div>
        <div v-else>
          <label class="hidden" for="description">Description</label>
          <textarea class="w-full border border-gray-400 rounded py-3 px-3 text-gray-600 text-2xl leading-tight focus:border-gray-800 hover:border-gray-80 h-[100px]" id="description" name="description" v-model="enterprise.description" placeholder="Inscrire une description *" />
          <p v-if="isError.description" class="col-start-4 col-span-9 text-red-500 text-base italic">Veuillez inscrire une description</p>
        </div>

        <!-- 2e partie -->
        <div v-if="isViewStep">
          <div class="presentation-body-title text-2xl mt-16 mb-10 font-semibold">Personne contact</div>
          <div class="text-3xl my-10 font-semibold">{{ contactOnView }}</div>
        </div>
        <div v-else class="grid grid-cols-12 gap-8">
          <InputEntreprise v-if="isUpdateStep" class="col-span-12 md:col-span-6 mt-20" v-model="contactOnView" name="contactName" label="Personne de contact" :is-edit="!isViewStep" />
          <InputEntreprise v-if="isNewStep" class="col-span-12 md:col-span-6 mt-20" v-model="contactOnEdit" name="contactName" label="Personne de contact" :is-edit="!isViewStep" />
        </div>
        <!-- 3e partie -->
        <div class="presentation-body-title text-2xl my-16 font-semibold">Informations de contact</div>
        <div class="grid grid-cols-12 gap-8">
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.address" name="address" :is-error="isError.address" :label="!isViewStep ? 'Adresse *' : 'Adresse'" :is-edit="!isViewStep" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.phone" name="phone" :is-error="isError.phone" :label="!isViewStep ? 'Téléphone *' : 'Téléphone'" :is-edit="!isViewStep" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.city" name="city" :is-error="isError.city" :label="!isViewStep ? 'Ville *' : 'Ville'" :is-edit="!isViewStep" />
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.email" name="email" :is-error="isError.email" :label="!isViewStep ? 'Courriel *' : 'Courriel'" :is-edit="!isViewStep" />

          <!-- Provinces -->
          <div class="col-span-12 md:col-span-6 border-l-8 border-l-gray-600 px-4">
            <div class="text-gray-800 mb-4 text-2xl font-semibold">{{ !isViewStep ? "Province *" : "Province" }}</div>
            <div>
              <div v-if="isViewStep && enterprise.province" class="text-gray-400">{{ enterprise.province.value }}</div>
              <div v-else>
                <label class="hidden" for="province">Province: *</label>
                <select class="block w-full border border-gray-400 rounded py-3 px-3 text-gray-600 leading-tight focus:border-gray-800 hover:border-gray-800" id="province" name="province" v-model="enterprise.province">
                  <option v-for="province in provinces" :key="province._id" :value="province">{{ province.value }}</option>
                </select>
                <p v-if="isError.province" class="text-red-500 text-base italic">Veuillez choisir une province</p>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6"></div>
          <InputEntreprise class="col-span-12 md:col-span-6" v-model="enterprise.postalCode" name="postalCode" :is-error="isError.postalCode" :label="!isViewStep ? 'Code postal *' : 'Code postal'" :is-edit="!isViewStep" />
        </div>
      </div>

      <!-- boutons bas -->
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <!-- onView -->
        <BtnBase v-if="isViewStep" title="Retour à la liste des entreprises" icon="list" :action="onGoToListe" btn-class="btn-entreprise" />

        <!-- onUpdate or new -->
        <BtnBase v-if="!isViewStep" title="Annuler" icon="close" outline btn-class="btn-entreprise__outline" :action="onGoToListe" />
        <BtnBase v-if="!isViewStep" :title="isNewStep ? 'Sauvegarder' : 'Mettre à jour'" icon="save" btn-class="btn-entreprise" :action="onValidate" />
      </div>
    </form>
  </section>

  <section v-else class="h-screen bg-slate-100 page-padding">
    <div class="h-full flex justify-center items-center">
      <div class="text-4xl text-center">Une erreur est survenue lors de la récupération des données</div>
    </div>
  </section>
  <div></div>

  <teleport to="body">
    <ModalSuppression v-model="isOpenModalSuppression" :description="enterprise.name" :action="onDelete" @close="isOpenModalSuppression = false" />
  </teleport>

  <!-- <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport> -->
</template>
<script setup>
import { computed, reactive, ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import useUtile from "../composables/utile.js";
import useLogoBank from "../composables/logoBank.js";

import BtnBase from "../components/BtnBase.vue";
import InputEntreprise from "@/components/InputEntreprise.vue";
import ModalSuppression from "@/components/ModalSuppression.vue";
import Loader from "@/components/Loader.vue";

import EnterpriseService from "../services/enterprises/enterprisesServices";
import ProvinceService from "../services/provinces/provincesServices";
import ActivityServices from "../services/activitySectors/activitySectorsServices";

const route = useRoute();
const router = useRouter();
const { getLogo } = useLogoBank();
const { validateEmail, validatePhone, validatePostalCode } = useUtile();
const { objet, getEntrepriseById, addEnterprises, editEnterprises, deleteEnterprise } = EnterpriseService();
const { provincesListe, allProvinces } = ProvinceService();
const { activityListe, allActivitySectors } = ActivityServices();

const _id = route.params.id;
const isUpdate = route.params.action === "update" ? true : false;

const isNewStep = computed(() => _id === "new");
const isViewStep = computed(() => _id !== "new" && !isUpdate);
const isUpdateStep = computed(() => isUpdate);

const enterprise = ref({});
const activitiesSector = ref([]);
const provinces = ref([]);
const contactOnView = "Louise St-Cyr";
const contactOnEdit = ref("");
const enterpriseLogo = ref("");

const isQueryError = ref(false);

const isLoadedProvinces = ref(false);
const isLoadedActivitiesSector = ref(false);
const isLoadedEnterprise = ref(false);

const isLoading = computed(() => {
  if (_id === "new") return false;
  if (isLoadedProvinces.value && isLoadedActivitiesSector.value && isLoadedEnterprise.value) return false;
  else return true;
});

const isOpenModalSuppression = ref(false);

const isError = reactive({
  enterpriseName: false,
  description: false,
  address: false,
  phone: false,
  city: false,
  email: false,
  province: false,
  postalCode: false,
});

function onValidate(e) {
  e.preventDefault();

  if (!enterprise.value.name || enterprise.value.name === "") isError.enterpriseName = true;
  else isError.enterpriseName = false;

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

  if (!validatePostalCode(enterprise.value.postalCode)) isError.postalCode = true;
  else isError.postalCode = false;

  if (Object.values(isError).every((result) => !result)) {
    if (isNewStep.value) {
      // Ajoute le secteur d'activité non demandé dans le formulaire
      enterprise.value.activitySector = {
        _id: "65ff1242b6bb34421122ad98",
        value: "Application",
      };

      addEnterprises(enterprise.value);

      // Retourne à la page de toute les entreprises. J'utilise un timer pou rlaisser le temps de se mettre à jour
      setTimeout(() => {
        onGoToListe();
      }, 1500);
    } else {
      editEnterprises(enterprise.value);

      setTimeout(() => {
        onGoToListe();
      }, 1500);
    }
  }
}

function onUpdate() {
  router.push({ path: `/entreprise/${enterprise.value._id}/update` });
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
  setTimeout(() => {
    onGoToListe();
  }, 1500);
}

function onWhatFor(e) {
  e.preventDefault();
  console.log("Bonjour Bruno et Mathieu, je ne sais pas ce que vous vouliez avec ce bouton!");
}

onMounted(() => {
  if (_id !== "new") {
    // Faire requête de l'entreprise si ce n'est pas un ajout
    getEntrepriseById(_id);
  }

  // Faire requête des provinces
  allProvinces();
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
