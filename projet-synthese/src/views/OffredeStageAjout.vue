<template>
    <div class="DemandeStage__Titre">
      <h1>Ajouter une offre de stage</h1>
    </div>
  
    <section class="bg-white p-10 DemandeStage__section">
      <div>
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="title">Titre du poste</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Veuillez entrer le titre du poste"
            type="text"
            v-model="title"
            name="title"
            required
          />
        </div>

        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="description">Descirpion du poste</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Veuillez entrer une brève description du poste"
            type="text"
            v-model="description" name="description"
            required
          />
        </div>

  
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="enterprise">Nom de l'enterprise</label>
          <select v-model="selectedEnterprise"  name="selectedEnterprise" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
            <option disabled value="">Sélectionnez une enterprise</option>
            <option v-for="enterprise in enterpriseListe" :key="enterprise._id" :value="enterprise._id">{{ enterprise.name }}</option>
          </select>
        </div>
  
        <h3>Informations sur l'enterprise</h3>
        <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
          <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="description_offre">Courte présentation de l'enterprise</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="ici une courte présentation de l'enterprise"
                  type="text"
                  v-model="description_enterprise"
                  required
                />
              </div>
            </div>
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="city_enterprise">Ville</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="ici la ville de l'enterprise"
                  type="text"
                  v-model="city_enterprise"
                  required
                />
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="phone_enterprise">Numéro de téléphone de l'enterprise :</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="ici le numéro de téléphone de l'enterprise"
                  type="text"
                  v-model="phone_enterprise"
                  required
                />
              </div>
            </div>
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="email_enterprise">Courriel de l'enterprise</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="ici le courriel de l'enterprise"
                  type="text"
                  v-model="email_enterprise"
                  required
                />
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
                <label class="text-bg font-bold" for="province">Province</label>
                <select v-model="selectedProvince"  name="selectedProvince" class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
                  <option disabled value="">Sélectionnez une province</option>
                  <option v-for="province in provincesListe" :key="province._id" :value="province._id">{{ province.value }}</option>
                </select>
              </div>
            </div>
  
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="weeklyWorkHours">Heures par semaine</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="Heures par semaine"
                  type="text"
                  v-model="weeklyWorkHours" name="weeklyWorkHours"
                  required
                />
              </div>
            </div>
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="salary">Salaire</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="Salaire"
                  type="text"
                  v-model="salary"
                  name="salary"
                  required
                />
              </div>
            </div>
          </div>
  
          <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="internshipType">Type de l'offre</label>
                <select v-model="selectedType" name="selectedType"  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input">
                  <option disabled value="">Sélectionnez le type de l'offre</option>
                  <option v-for="internshipType in internshipTypesListe" :key="internshipType._id" :value="internshipType._id">{{ internshipType.value }}</option>
                </select>
              </div>
            </div>
  
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="paid">Rémunération</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  placeholder="Rémunération"
                  type="text"
                  v-model="paid"
                  name="paid"
                  required
                />
              </div>
            </div>
  
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="startDate">Date de début</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  type="date"
                  v-model="startDate"  name="startDate"
                  required
                />
              </div>
            </div>
  
            <div class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="endDate">Date de fin</label>
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  type="date"
                  v-model="endDate" name="endDate"
                  required
                />
              </div>
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
        Annuler
      </button>
      <button
        class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn"
        @click="save"
      >
        Ajouter
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  import { useRouter } from "vue-router";
  import InternshipOffersService from "../services/internshipOffers/internshipOffersServices";
  import EnterpriseService from "../services/enterprises/enterprisesServices";
  import EnterpriseProvince from "../services/provinces/provincesServices";
  import typeService from "../services/internshipTypes/internshipTypesServices";
  
  const router = useRouter();

  const title = ref("");
  const description = ref("");
  const selectedEnterprise = ref("");
  const description_enterprise = ref("");
  const city_enterprise = ref("");
  const phone_enterprise = ref("");
  const email_enterprise = ref("");
  const startDate = ref("");
  const endDate = ref("");
  const weeklyWorkHours = ref("");
  const salary = ref("");
  const selectedProvince = ref("");
  const requiredSkills = ref([]);
  const selectedType = ref("");
  const paid = ref("");


  const { provincesListe, allProvinces } = EnterpriseProvince();
  const { enterpriseListe, allEnterprises, getEntrepriseById } = EnterpriseService();
  const { internshipTypesListe, allInternshipTypes } = typeService();
  const { addInternshipOffer } = InternshipOffersService();
  
  const save = async () => {
    const skillsArray = requiredSkills.value.split(",").map(skill => skill.trim());
    const newOffer = {
        title: title.value,
        description: description.value,
        enterprise: selectedEnterprise.value,
        startDate: startDate.value,
        endDate: endDate.value,
        weeklyWorkHours: weeklyWorkHours.value,
        salary: salary.value,
        province: selectedProvince.value,
        requiredSkills: skillsArray,
        internshipType: selectedType.value,
        paid: paid.value,
        isActive: false, 
    };
  
  try {
    await addInternshipOffer(newOffer);
    console.log("Nouvelle offre de stage ajoutée avec succès !");
    console.log(newOffer);
    router.push({ name: 'OffredeStage' });
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'offre de stage :", error);
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
      description_enterprise.value = enterprise.description;
      city_enterprise.value = enterprise.city;
      phone_enterprise.value = enterprise.phone;
      email_enterprise.value = enterprise.email;
    } catch (error) {
      console.error("Erreur lors de la récupération des informations de l'enterprise :", error);
    }
  };
  
  watch(selectedEnterprise, () => {
    loadEnterpriseInfo();
  });
  
  const cancel = () => {
    // Réinitialisez les valeurs des champs si nécessaire
  };
  </script>
  