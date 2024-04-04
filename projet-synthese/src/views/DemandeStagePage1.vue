<template>
  <div v-if="!isQueryError">
    <form @submit.prevent="onValidate">
      <!-- Entête -->
      <div class="DemandeStage__Titre">
        <p>Demande de stage</p>
        <h1>Développeur Front-End</h1>
      </div>

      <!--  <div class="DemandeStage__btn">
      <button class="text-green-500 DemandeStage__btn__check">
        <ion-icon name="checkmark-sharp"></ion-icon>
      </button>
      <button class="text-slate-700 DemandeStage__btn__create">
        <ion-icon name="create-sharp"></ion-icon>
      </button>
      <button class="text-red-500 DemandeStage__btn__close">
        <ion-icon name="close-sharp"></ion-icon>
      </button>
    </div> -->

      <!-- boutons haut -->
      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase
          v-if="!isEditOrCreate && _id !== 'new'"
          icon="Done"
          :action="onWhatFor"
          show-icon-only
          icon-color="green"
          icon-size="text-6xl"
        />

        <BtnBase
          v-if="isEditOrCreate && _id !== 'new'"
          icon="close"
          :action="onGoToView"
          show-icon-only
          icon-color="red"
          icon-size="text-6xl"
        />
        <BtnBase
          v-if="isEditOrCreate && _id === 'new'"
          icon="close"
          :action="onReset"
          show-icon-only
          icon-color="red"
          icon-size="text-6xl"
        />
        <BtnBase
          v-if="isEditOrCreate"
          icon="save"
          :action="onValidate"
          show-icon-only
          icon-color="green"
          icon-size="text-6xl"
        />
        <BtnBase
          v-if="!isEditOrCreate"
          icon="edit_square"
          :action="onUpdate"
          show-icon-only
          icon-size="text-6xl"
        />
        <BtnBase
          v-if="!isEditOrCreate"
          icon="disabled_by_default"
          :action="onOpenModalSuppression"
          show-icon-only
          icon-color="red"
          icon-size="text-6xl"
        />
      </div>

      <!-- corps -->
      <section class="bg-white p-10 DemandeStage__section">
        <div v-if="!isEditOrCreate" class="DemandeStage__section__Entete">
          <h2>
            {{ InternshipRequest?.candidate?.firstName }}
            {{ InternshipRequest?.candidate?.lastName }}
          </h2>
          <p>
            {{ InternshipRequest?.candidate?.description }}
          </p>
          <br />
          <p>
            {{ InternshipRequest?.candidate?.description }}
          </p>
        </div>
        <div v-else>
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="internshipRequestFirstName"
              >Prenom candidat</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              id="internshipRequestFirstName"
              name="internshipRequestFirstName"
              placeholder="Kevin Labonté"
              type="text"
              v-model="InternshipRequest.candidate.firstName"
              required
            />
            <p
              v-if="isError.internshipRequestFirstName"
              class="col-start-4 col-span-9 text-red-500 text-xs italic"
            >
              Veuillez inscrire le prenom du candidat
            </p>
          </div>
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="internshipRequestLastName"
              >Nom candidat</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              id="internshipRequestLastName"
              name="internshipRequestLastName"
              placeholder="Kevin Labonté"
              type="text"
              v-model="InternshipRequest.candidate.lastName"
              required
            />
            <p
              v-if="isError.internshipRequestLastName"
              class="col-start-4 col-span-9 text-red-500 text-xs italic"
            >
              Veuillez inscrire le nom du candidat
            </p>
          </div>
          <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="internshipRequestDescription"
              >Présentation</label
            >
            <textarea
              class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
              id="internshipRequestDescription"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus
              sequi ipsa placeat possimus fugit veniam! Porro quis suscipit commodi
              aliquid. Culpa suscipit voluptatum maxime, vero nostrum ducimus aperiam
              reprehenderit quae, recusandae cumque voluptates vitae quaerat eum aut
              eius est dolorum in assumenda. Praesentium laboriosam fugiat soluta
              corporis excepturi aliquam?"
              name="internshipRequestDescription"
              cols="25"
              rows="6"
              v-model="InternshipRequest.candidate.description"
            ></textarea>
            <p
              v-if="isError.internshipRequestDescription"
              class="col-start-4 col-span-9 text-red-500 text-xs italic"
            >
              Veuillez inscrire la description
            </p>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
          <div class="col-span-12 md:col-span-6 max-md:p-10">
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Programme de formation</strong></p>
              <p>{{ InternshipRequest.title }}</p>
            </div>

            <div v-else class="DemandeStage__section__info__item">
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
                <p
                  v-if="isError.internshipRequestTitreProgramme"
                  class="col-start-4 col-span-9 text-red-500 text-xs italic"
                >
                  Veuillez inscrire le programme de formation
                </p>
              </div>
            </div>

            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Secteur d'activité</strong></p>
              <p>{{ InternshipRequest.description }}</p>
            </div>

            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Compétences</strong></p>
              <p>{{ InternshipRequest.skills }}</p>
            </div>

            <div v-else class="DemandeStage__section__info__item">
              <div class="mb-16">
                <label
                  class="text-bg font-bold"
                  for="internshipRequestCompetences"
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
                <p
                  v-if="isError.internshipRequestCompetences"
                  class="col-start-4 col-span-9 text-red-500 text-xs italic"
                >
                  Veuillez inscrire votre compétence
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6 max-md:p-10">
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Établissement d'enseignement :</strong></p>
              <p>Cégep de Trois-Rivières</p>
            </div>
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Ville</strong></p>
              <p>{{ InternshipRequest.candidate?.city }}</p>
            </div>

            <div v-else class="DemandeStage__section__info__item">
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
                <p
                  v-if="isError.internshipRequestVille"
                  class="col-start-4 col-span-9 text-red-500 text-xs italic"
                >
                  Veuillez inscrire votre ville
                </p>
              </div>
            </div>

            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p>
                <strong>Région</strong>
              </p>
              <p>{{ InternshipRequest.province?.value }}</p>
            </div>
          </div>
        </div>

        <h3>Information sur le stage recherché</h3>

        <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
          <div class="col-span-12 md:col-span-6 max-md:p-10">
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Type de stage</strong></p>
              <p>{{ InternshipRequest.internshipType?.value }}</p>
            </div>
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Nombre d'heure par semaine</strong></p>
              <p>{{ InternshipRequest.weeklyWorkHours }}</p>
            </div>
            <div class="DemandeStage__section__info__item">
              <p><strong>Rémunération</strong></p>
              <p>ladiscrétionde lentreprise</p>
            </div>
          </div>

          <div class="col-span-12 md:col-span-6 max-md:p-10">
            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Date de début</strong></p>
              <p>{{ InternshipRequest.startDate }}</p>
            </div>

            <div v-else class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label
                  class="text-bg font-bold"
                  for="internshipRequestDateDebut"
                  >Date de début</label
                >
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  id="internshipRequestDateDebut"
                  name="internshipRequestDateDebut"
                  type="date"
                  value="2022-05-25"
                  v-model="InternshipRequest.startDate"
                  required
                />
                <p
                  v-if="isError.internshipRequestDateDebut"
                  class="col-start-4 col-span-9 text-red-500 text-xs italic"
                >
                  Veuillez inscrire la date de début
                </p>
              </div>
            </div>

            <div
              v-if="!isEditOrCreate"
              class="DemandeStage__section__info__item"
            >
              <p><strong>Date de fin</strong></p>
              <p>{{ InternshipRequest.endDate }}</p>
            </div>

            <div v-else class="DemandeStage__section__info__item">
              <div class="mb-16 mr-2">
                <label class="text-bg font-bold" for="internshipRequestDateFin"
                  >Date de fin</label
                >
                <input
                  class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                  id="internshipRequestDateFin"
                  name="internshipRequestDateFin"
                  value="2022-05-25"
                  type="date"
                  v-model="InternshipRequest.endDate"
                  required
                />
                <p
                  v-if="isError.internshipRequestDateFin"
                  class="col-start-4 col-span-9 text-red-500 text-xs italic"
                >
                  Veuillez inscrire la date de fin
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3>Informations suplémentaires</h3>
        <div class="mt-8">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            expedita maxime vel quis quas quia, laborum rerum tempora et
            possimus officiis, ullam sunt esse perspiciatis accusamus beatae
            iure eligendi blanditiis reiciendis nisi quae quibusdam nostrum
            ratione. Magni architecto error atque velit dicta quas voluptatem
            qui. Quis sequi, reiciendis et sint ab mollitia at sapiente
            Similique.
          </p>
          <button
            class="text-white font-bold py-4 px-4 mt-24 rounded focus:outline-none focus:shadow-outline btn"
            @click="telecharger"
          >
            <div>
              <ion-icon name="cloud-download-sharp"></ion-icon>Télécharger le
              C.V.
            </div>
          </button>
        </div>
      </section>

      <div class="flex justify-center flex-wrap md:justify-end gap-5 py-8">
        <BtnBase
          v-if="isEditOrCreate && _id !== 'new'"
          title="Annuler"
          icon="close"
          color="#f9cb40"
          outline
          :action="onGoToView"
        />
        <BtnBase
          v-if="isEditOrCreate && _id === 'new'"
          title="Annuler"
          icon="close"
          color="#f9cb40"
          outline
          :action="onReset"
        />
        <BtnBase
          v-if="isEditOrCreate"
          :title="theBtnValidateTitle"
          icon="save"
          color="#f9cb40"
          :action="onValidate"
        />
        <BtnBase
          v-if="!isEditOrCreate"
          title="Modifier"
          icon="edit"
          color="#f9cb40"
          :action="onUpdate"
        />
        <BtnBase
          v-if="!isEditOrCreate"
          title="Supprimer"
          icon="delete"
          color="#f9cb40"
          :action="onOpenModalSuppression"
        />
      </div>
    </form>
  </div>

  <div v-else class="h-screen bg-slate-100 page-padding">
    <div class="h-full flex justify-center items-center">
      <div class="text-4xl text-center">
        Une erreur est survenue lors de la récupération des données
      </div>
    </div>
  </div>

  <teleport to="body">
    <ModalSuppression
      v-model="isOpenModalSuppression"
      :description="InternshipRequest.candidate?.description"
      :action="onDelete"
      @close="isOpenModalSuppression = false"
    />
  </teleport>

  <teleport to="body">
    <Loader v-model="isLoading" />
  </teleport>
</template>

<script setup>
import { ref, computed, reactive, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import InternshipRequestsServices from "@/services/internshipRequests/internshipRequestsServices";
import ModalSuppression from "@/components/ModalSuppression.vue";
import BtnBase from "@/components/BtnBase.vue";

const router = useRouter();
const route = useRoute();
const { internshipRequestsListe, allInternshipRequests } =
  InternshipRequestsServices();

const {
  objet,
  getInternshipRequestById,
  addInternshipRequest,
  editInternshipRequest,
  deleteInternshipRequest,
} = InternshipRequestsServices();

const { _id } = router.currentRoute.value.params;
const isUpdate =
  router.currentRoute.value.params.action === "update" ? true : false;

const isEditOrCreate = ref(false);

const InternshipRequest = ref({});
const isQueryError = ref(false);
const isLoadedInternshipRequest = ref(false);

/* const isLoading = computed(() => {
  if (isLoadedInternshipRequest.value) return false;
  else return true;
});
 */
const isLoading = computed(() => {
  if (_id === "new") return false;
  if (isLoadedInternshipRequest.value) return false;
  else return true;
});
const isOpenModalSuppression = ref(false);

const isError = reactive({
  internshipRequestFirstName: false,
  internshipRequestLastName: false,
  internshipRequestDescription: false,
  internshipRequestTitreProgramme: false,
  internshipRequestCompetences: false,
  internshipRequestVille: false,
  internshipRequestDateDebut: false,
  internshipRequestDateFin: false,
});

const theBtnValidateTitle = computed(() => {
  if (_id === "new") return "Ajouter";
  else return "Mettre à jour";
});

function onValidate(e) {
  e.preventDefault();

  if (InternshipRequest.value.firstName === "")
    isError.internshipRequestFirstName = true;
  else isError.internshipRequestFirstName = false;

  if (InternshipRequest.value.lastName === "")
    isError.internshipRequestLastName = true;
  else isError.internshipRequestLastName = false;

  if (InternshipRequest.value.description === "")
    isError.internshipRequestDescription = true;
  else isError.internshipRequestDescription = false;

  if (InternshipRequest.value.title === "")
    isError.internshipRequestTitreProgramme = true;
  else isError.internshipRequestTitreProgramme = false;

  if (InternshipRequest.value.skills === "")
    isError.internshipRequestCompetences = true;
  else isError.internshipRequestCompetences = false;

  if (InternshipRequest.value.city === "")
    isError.internshipRequestVille = true;
  else isError.internshipRequestVille = false;

  if (InternshipRequest.value.startDate === "")
    isError.internshipRequestDateDebut = true;
  else isError.internshipRequestDateDebut = false;

  if (InternshipRequest.value.endDate === "")
    isError.internshipRequestDateFin = true;
  else isError.internshipRequestDateFin = false;


  if (Object.values(isError).every((result) => !result)) {
    console.log("POST/PATCH", InternshipRequest.value);
    if (_id === "new") {
      addInternshipRequest(InternshipRequest.value);
      InternshipRequest.value = {};
    } else {
      editInternshipRequest(InternshipRequest.value);
    }
  }

}

function onUpdate(e) {
  e.preventDefault();
  /*  router.push({ path: `/demande/${InternshipRequest.value._id}/update` }); */
  isEditOrCreate.value = true;
}

function onReset(e) {
  e.preventDefault();
  InternshipRequest.value = {};
}

function onOpenModalSuppression(e) {
  e.preventDefault();
  isOpenModalSuppression.value = true;
}

function onDelete(e) {
  deleteInternshipRequest(_id);
  isOpenModalSuppression.value = false;
}

function onGoToView(e) {
  e.preventDefault();
  isEditOrCreate.value = false;
  router.push({ path: `/demande/${_id}` });
}

onMounted(() => {

  if (_id === "new") {
    isEditOrCreate.value = true;
  } else {
    getInternshipRequestById(_id);
    if (isUpdate) isEditOrCreate.value = true;
  }

  allInternshipRequests();
});

watchEffect(() => {
  if (Object.keys(objet.value).length !== 0) {
    InternshipRequest.value = objet.value;
    isLoadedInternshipRequest.value = true;
    if (InternshipRequest.value.statusCode) isQueryError.value = true;
  }
});
</script>

<style scoped>
/* TODO page-padding */
.page-padding {
  padding: 3rem;
}
</style>
