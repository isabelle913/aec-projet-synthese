<template>
  <div class="DemandeStage__Titre">
    <h1>Modifier l'offre de stage</h1>
  </div>
  <section class="bg-white p-10 DemandeStage__section">
    <div>
      <div v-if="showSuccessMessage" class="text-green-500 mt-4">Offre de stage Modifié avec succès !</div>

      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="title">Titre du poste</label>
        <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="title" name="title" required />
      </div>

      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="description">Description du poste</label>
        <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="description" name="description" required />
      </div>

      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="enterprise">Nom de l'entreprise</label>
        <select v-model="selectedEnterprise" name="selectedEnterprise" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
          <option value="selectedEnterprise" disabled>{{ enterpriseName }} (Sélectionnez une autre enterprise)</option>
          <option v-for="enterprise in enterpriseListe" :key="enterprise._id" :value="enterprise._id">{{ enterprise.name }}</option>
        </select>
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
              <p>{{ city_enterprise }}</p>
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
      <h3>Informations sur l'offre de stage</h3>

      <div class="DemandeStage__section__info__item">
        <div class="mb-16">
          <label class="text-bg font-bold" for="requiredSkills">Compétences requises</label>
          <textarea class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" name="requiredSkills" cols="20" rows="4" v-model="requiredSkills"></textarea>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-5 my-8 mb-20 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="province">Province</label>
              <select v-model="selectedProvince" name="selectedProvince" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
                <option disabled value="">{{ value_province }}</option>
                <option v-for="province in provincesListe" :key="province._id" :value="province._id">{{ province.value }}</option>
              </select>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="weeklyWorkHours">Heures par semaine</label>
              <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="weeklyWorkHours" name="weeklyWorkHours" required />
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="salary">Salaire</label>
              <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="salary" name="salary" required />
            </div>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 max-md:p-10">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="internshipType">Type de l'offre</label>
              <select v-model="selectedType" name="selectedType" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
                <option disabled value="">{{ value_internshipType }}</option>
                <option v-for="internshipType in internshipTypesListe" :key="internshipType._id" :value="internshipType._id">{{ internshipType.value }}</option>
              </select>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="paid">Rémunération</label>
              <select v-model="paid" name="paid" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
                <option disabled value="">Sélectionnez une type de rémunération</option>
                <option value="DISCRETIONARY">DISCRETIONARY</option>
                <option value="PAID">PAID</option>
                <option value="UNPAID">UNPAID</option>
              </select>
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="startDate">Date de début</label>
              <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="startDate" name="startDate" required />
            </div>
          </div>

          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="endDate">Date de fin</label>
              <input class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input" type="text" v-model="endDate" name="endDate" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="DemandeStage__btn">
    <button class="text-slate-400 border-solid text-2xl border-slate-400 border-2 py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline" @click="cancel">
      <div class="">Annuler</div>
    </button>
    <button class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn" @click="edit">Modifier</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import OffresService from "@/services/internshipOffers/internshipOffersServices";
import EnterpriseService from "../services/enterprises/enterprisesServices";
import EnterpriseProvince from "../services/provinces/provincesServices";
import typeService from "../services/internshipTypes/internshipTypesServices";

const router = useRouter();
const route = useRoute();
const { getInternshipOffereById, editInternshipOffer } = OffresService();

const id_enterprise = ref("");
//const image_enterprise = ref("");
const title = ref("");
const description = ref("");
//entreprise
const selectedEnterprise = ref("");
const enterpriseName = ref("");
const adresse_enterprise = ref("");
const postalCode_enterprise = ref("");
const city_enterprise = ref("");
const province_enterprise = ref("");
const provincevalue_enterprise = ref("");
const enterprisePhone = ref("");
const enterpriseEmail = ref("");
const enterpriseDescription = ref("");
const activitySectorid_enterprise = ref("");
const activitySectorvalue_enterprise = ref("");
const website_enterprise = ref("");

const startDate = ref("");
const endDate = ref("");
const weeklyWorkHours = ref("");
const salary = ref("");

//porovince
const selectedProvince = ref("");
const id_province = ref("");
const value_province = ref("");

//pinternchipType
const selectedType = ref("");
const id_internshipType = ref("");
const value_internshipType = ref("");

const paid = ref("");
const requiredSkills = ref([]);

const { provincesListe, allProvinces, getProvinceById } = EnterpriseProvince();
const { enterpriseListe, allEnterprises, getEntrepriseById } = EnterpriseService();
const { internshipTypesListe, allInternshipTypes, getInternshipTypeById } = typeService();
const offer = ref(null);
function formatDate(value) {
  return new Date(value).toLocaleString();
}

const _id = route.params.id;

onMounted(async () => {
  const _id = route.params.id;

  try {
    console.log(_id);
    const offer = await getInternshipOffereById(_id);
    title.value = offer.title;
    description.value = offer.description;
    selectedEnterprise.value = offer.enterprise._id;
    enterpriseName.value = offer.enterprise.name;
    enterpriseDescription.value = offer.enterprise.description;
    city_enterprise.value = offer.enterprise.city;
    enterprisePhone.value = offer.enterprise.phone;
    enterpriseEmail.value = offer.enterprise.email;
    provincevalue_enterprise.value = offer.enterprise.province.value;
    id_province.value = offer.province._id;
    value_province.value = offer.province.value;
    weeklyWorkHours.value = offer.weeklyWorkHours;
    salary.value = offer.salary;
    id_internshipType.value = offer.internshipType._id;
    value_internshipType.value = offer.internshipType.value;
    paid.value = offer.paid;
    startDate.value = offer.startDate;
    endDate.value = offer.endDate;
    requiredSkills.value = offer.requiredSkills;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'offre de stage :", error);
  }
});

const edit = async () => {
  const startDateString = new Date(startDate.value);
  const endDateString = new Date(endDate.value);
  let skillsArray = [];
  if (typeof requiredSkills.value === "string" && requiredSkills.value.trim() !== "") {
    skillsArray = requiredSkills.value.split(",").map((skill) => skill.trim());
  }
  const editOffer = {
    _id: route.params.id,
    title: title.value,
    description: description.value,
    enterprise: {
      _id: id_enterprise.value,
      image: "image",
      name: enterpriseName.value,
      address: adresse_enterprise.value,
      postalCode: postalCode_enterprise.value,
      city: city_enterprise.value,
      province: {
        _id: province_enterprise.value,
        value: provincevalue_enterprise.value,
      },
      phone: enterprisePhone.value,
      email: enterpriseEmail.value,
      description: enterpriseDescription.value,
      activitySector: {
        _id: activitySectorid_enterprise.value,
        value: activitySectorvalue_enterprise.value,
      },
      website: "WebSite@gmail.com",
    },
    startDate: startDateString.toLocaleDateString(),
    endDate: endDateString.toLocaleDateString(),
    weeklyWorkHours: parseInt(weeklyWorkHours.value),
    salary: parseInt(salary.value),
    province: {
      _id: id_province.value,
      value: value_province.value,
    },
    requiredSkills: skillsArray,
    internshipType: {
      _id: id_internshipType.value,
      value: value_internshipType.value,
    },
    paid: paid.value,

    isActive: false,
  };
  const showSuccessMessage = ref(false);

  try {
    await editInternshipOffer(editOffer);
    showSuccessMessage.value = true;
    console.log(editOffer);
  } catch (error) {
    console.error("Erreur lors de la modification de l'offre de stage :", error);
  }
};

onMounted(() => {
  allEnterprises();
  allProvinces();
  allInternshipTypes();
});

const loadEnterpriseInfo = async () => {
  if (!selectedEnterprise.value) return;
  try {
    const enterprise = await getEntrepriseById(selectedEnterprise.value);
    id_enterprise.value = enterprise._id;
    //image_enterprise.value = enterprise.image;
    enterpriseName.value = enterprise.name;
    adresse_enterprise.value = enterprise.address;
    postalCode_enterprise.value = enterprise.postalCode;
    city_enterprise.value = enterprise.city;
    province_enterprise.value = enterprise.province._id;
    provincevalue_enterprise.value = enterprise.province.value;
    enterprisePhone.value = enterprise.phone;
    enterpriseEmail.value = enterprise.email;
    enterpriseDescription.value = enterprise.description;
    activitySectorid_enterprise.value = enterprise.activitySector._id;
    activitySectorvalue_enterprise.value = enterprise.activitySector.value;
    website_enterprise.value = enterprise.website;
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de l'enterprise :", error);
  }
};

const loadProvinceInfo = async () => {
  if (!selectedProvince.value) return;
  try {
    const province = await getProvinceById(selectedProvince.value);
    id_province.value = province._id;
    value_province.value = province.value;
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de l'enterprise :", error);
  }
};

const loadTypeInfo = async () => {
  if (!selectedType.value) return;
  try {
    const type = await getInternshipTypeById(selectedType.value);
    id_internshipType.value = type._id;
    value_internshipType.value = type.value;
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de l'enterprise :", error);
  }
};

watch(selectedEnterprise, () => {
  loadEnterpriseInfo();
});
watch(selectedProvince, () => {
  loadProvinceInfo();
});
watch(selectedType, () => {
  loadTypeInfo();
});
function cancel() {
  router.go(-1);
}
</script>
