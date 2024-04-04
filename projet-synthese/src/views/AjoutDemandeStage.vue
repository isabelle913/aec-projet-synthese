<template>
  <div class="DemandeStage__Titre page-padding">
    <h1>Ajouter une demande</h1>
  </div>

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
      <!-- {{ success ? "Mettre à jour" : "Enregistrer" }} -->
      <span>Mettre à jour</span>
    </button>
  </div>

  <div class="flex mb-16">
    <label
      class="text-bg font-bold self-center"
      for="internshipRequestTitreProgramme"
      >Titre :</label
    >
    <input
      class="flex-grow shadow appearance-none border rounded py-4 px-3 mt-5 ml-4 leading-tight focus:outline-none focus:shadow-outline input"
      id="internshipRequestTitreProgramme"
      name="internshipRequestTitreProgramme"
      placeholder="Veuillez entrer vos titres!"
      type="text"
      v-model="InternshipRequest.title"
      required
    />
  </div>

  <section class="bg-white p-10 DemandeStage__section">
    <div>
      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="internshipRequestFirstName"
          >Nom et prénom</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
          id="internshipRequestFirstName"
          name="internshipRequestFirstName"
          placeholder="Veuillez entrer vos noms et prenoms!"
          type="text"
          v-model="InternshipRequest.candidate.firstName"
          required
        />
      </div>
      <div class="mb-16 mr-2">
        <label class="text-bg font-bold" for="internshipRequestDescription"
          >Présentation</label
        >

        <textarea
          class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus sequi ipsa placeat possimus fugit veniam! Porro quis suscipit commodialiquid. Culpa suscipit voluptatum maxime, vero nostrum ducimus aperiam reprehenderit quae, recusandae cumque voluptates vitae quaerat eum aut eius est dolorum in assumenda. Praesentium laboriosam fugiat soluta corporis excepturi aliquam?"
          id="internshipRequestDescription"
          name="internshipRequestDescription"
          cols="25"
          rows="4"
          v-model="InternshipRequest.candidate.description"
        ></textarea>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
      <div class="col-span-12 md:col-span-6 max-md:p-10">
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label
              class="text-bg font-bold"
              for="internshipRequestTitreProgramme"
              >Programme de formation</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              id="internshipRequestTitreProgramme"
              name="internshipRequestTitreProgramme"
              placeholder="Développement Web"
              type="text"
              v-model="InternshipRequest.title"
              required
            />
          </div>
        </div>
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="secteurActivite"
              >Secteur d'activité</label
            >
            <select
              class="shadow border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline"
              name="secteurActivite"
              required
            >
              <option value="">Veuillez effectuer un choix</option>
              <option value="aucun">Aucun</option>
              <option value=""></option>
            </select>
          </div>
        </div>

        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="region">Région</label>
            <select
              class="shadow border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline"
              name="region"
              required
            >
              <option value="">Veuillez effectuer un choix</option>
              <option value="aucun">Aucun</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10">
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="ets_scolaire"
              >Établissement scolaire</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              placeholder="Cégep de Trois-Rivières"
              type="text"
              v-model="ets_scolaire"
              required
            />
          </div>
        </div>
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="internshipRequestVille"
              >Ville</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              id="internshipRequestVille"
              name="internshipRequestVille"
              placeholder="Trois-Rivières"
              type="text"
              v-model="InternshipRequest.candidate.city"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="DemandeStage__section__info__item">
      <div class="mb-16">
        <label class="text-bg font-bold" for="internshipRequestCompetences"
          >Compétences</label
        >
        <textarea
          class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
          placeholder="HTML, CSS, JavaScript, React, vue.js, GIT, PHP, MySQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum, facilisis eros, ut dapibus quam hendrerit nec."
          id="internshipRequestCompetences"
          name="internshipRequestCompetences"
          cols="20"
          rows="4"
          v-model="InternshipRequest.skills"
        ></textarea>
      </div>
    </div>

    <h3>Informations sur le stage recherché</h3>
    <div class="grid grid-cols-12 gap-5 my-8 mb-20 DemandeStage__section__info">
      <div class="col-span-12 md:col-span-6 max-md:p-10">
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="type_stage"
              >Type de stage</label
            >
            <select
              class="shadow border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline"
              name="type_stage"
              required
            >
              <option value="">Veuillez effectuer un choix</option>
              <option value="aucun">Aucun</option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="secteurActivite"
              >Nombre d'heures pas semaine</label
            >
            <select
              class="shadow border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline"
              name="secteurActivite"
              required
            >
              <option value="">Veuillez effectuer un choix</option>
              <option value="aucun">Aucun</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 max-md:p-10">
        <div class="DemandeStage__section__info__item">
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="ets_scolaire"
              >Date de début</label
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
            <label class="text-bg font-bold" for="date_fin">Date de fin</label>
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

    <div class="DemandeStage__section__info__item">
      <div class="mb-16 flex flex-col">
        <label class="text-bg font-bold" for="discretion_entreprise"
          >Rémunération</label
        >
        <div>
          <input
            class="shadow border rounded mt-10 mr-4 w-8 h-8"
            type="checkbox"
            v-model="discretion_entreprise"
            required
          />
          <span>À la discrétion de l'entreprise</span>
        </div>
        <div>
          <input
            class="shadow border rounded mt-5 mr-4 w-8 h-8"
            type="checkbox"
            v-model="stage_remunere"
            required
          />
          <span>Stage rémunéré</span>
        </div>
        <div>
          <input
            class="shadow border rounded mt-5 mr-4 w-8 h-8"
            type="checkbox"
            v-model="stage_non_remunere"
            required
          />
          <span>Stage non rémunéré</span>
        </div>
      </div>
    </div>

    <h3>Informations suplémentaires</h3>
    <div class="mt-8">
      <textarea
        class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus
      sequi ipsa placeat possimus fugit veniam! Porro quis suscipit commodi
      aliquid. Culpa suscipit voluptatum maxime, vero nostrum ducimus aperiam
      reprehenderit quae, recusandae cumque voluptates vitae quaerat eum aut
      eius est dolorum in assumenda. Praesentium laboriosam fugiat soluta
      corporis excepturi aliquam?"
        name="presentation"
        cols="25"
        rows="6"
        v-model="presentation"
      ></textarea>

      <div class="flex justify-between mt-20">
        <div>
          <label
            class="hidden mb-10 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
            >Parcourir</label
          >
          <input
            class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file-input"
            id="file_input"
            type="file"
            accept=""
          />
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
<!-- <script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";

import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

const router = useRouter();

const { internshipRequestsListe, allInternshipRequests } =
  InternshipRequestsServices();
const InternshipRequest = ref({});

const isLoading = ref(true);

onMounted(() => {
  allInternshipRequests();
});

watchEffect(() => {
  if (Array.isArray(internshipRequestsListe.value)) {
    InternshipRequest.value = [...internshipRequestsListe.value];
    isLoading.value = false;
  }
});

function onAddInternshipRequest() {
  router.push({ name: "demande", params: { id: "new" } });
}
function cancel() {
  router.go(-1);
}
</script> -->

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";

const router = useRouter();

const { addInternshipRequest } = InternshipRequestsServices();

const InternshipRequest = ref({
  title: "",
  candidate: {
    firstName: "",
    description: "",
    city: "",
  },
  skills: "",
});

function save() {
  addInternshipRequest(InternshipRequest.value)
    .then(() => {
      router.push({ name: "success" });
    })
    .catch((error) => {
      console.error("Error while saving internship request:", error);
    });
}

function cancel() {
  router.go(-1);
}
</script>

<style scoped>
/* TODO page-padding */
.page-padding {
  padding: 3rem;
}
</style>
