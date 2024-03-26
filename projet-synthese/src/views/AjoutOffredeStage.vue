<template>
    <div class="DemandeStage__Titre">
      <h1>Ajouter une offre de stage</h1>
    </div>
  
    <div class="DemandeStage__btn">
      <button class="text-slate-400 border-solid text-2xl border-slate-400 border-2 py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline"
        @click="cancel" >
        <div class="">Annuler</div>
      </button>
      <button
        class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn"
        @click="save" >
        <ion-icon name="save-sharp" class="mr-2"></ion-icon>
        <span>Mettre à jour</span>
      </button>
    </div>
  
    <div class="flex mb-16">
      <label class="text-bg font-bold self-center" for="titre">Titre du poste :</label>
      <input
        class="flex-grow shadow appearance-none border rounded py-4 px-3 mt-5 ml-4 leading-tight focus:outline-none focus:shadow-outline input"
        placeholder="Veuillez entrer le titre du poste"
        type="text"
        v-model="titre"
        required
      />
    </div>
  
    <section class="bg-white p-10 DemandeStage__section">
      <div>
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="nom_prenom">Nom de l'entreprise</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Veuillez entrer le nom de l'entreprise!"
            type="text"
            v-model="nom_prenom"
            required
          />
        </div>


        <h3>Informations sur l'entreprise</h3>
        <div class="grid grid-cols-12 gap-5 my-8 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="programme">Courte présentation de l'entreprise</label>
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici une courte présentation de l'entreprise"
                type="text"
                v-model="programme"
                required
              />
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="programme"
                >Ville</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici la ville de l'entreprise"
                type="text"
                v-model="programme"
                required
              />
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="ets_scolaire"
                >Courriel de l'entreprise :</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici le courriel de l'entreprise"
                type="text"
                v-model="ets_scolaire"
                required
              />
            </div>
          </div>
          <div class="DemandeStage__section__info__item">
            <div class="mb-16 mr-2">
              <label class="text-bg font-bold" for="Ville">Site web :</label>
              <input
                class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
                placeholder="ici le site web de l'entreprise"
                type="text"
                v-model="Ville"
                required
              />
            </div>
          </div>
        </div>
      </div>

    <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="presentation">Description complète du poste</label>
  
          <textarea
            class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus sequi ipsa placeat possimus fugit veniam! Porro quis suscipit commodialiquid. Culpa suscipit voluptatum maxime, vero nostrum ducimus aperiam reprehenderit quae, recusandae cumque voluptates vitae quaerat eum aut eius est dolorum in assumenda. Praesentium laboriosam fugiat soluta corporis excepturi aliquam?"
            name="presentation"
            cols="25"
            rows="4"
            v-model="presentation"
          ></textarea>
        </div>
      </div>
  
      
  
      <div class="DemandeStage__section__info__item">
        <div class="mb-16">
          <label class="text-bg font-bold" for="competences">Compétences requises</label>
          <textarea
            class="text-justify shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="HTML, CSS, JavaScript, React, vue.js, GIT, PHP, MySQL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet quam justo. Aliquam interdum, facilisis eros, ut dapibus quam hendrerit nec."
            name="competences"
            cols="20"
            rows="4"
            v-model="competences"
          ></textarea>
        </div>
      </div>
  
      <h3>Informations sur l'offre de stage</h3>
      <div class="grid grid-cols-12 gap-5 my-8 mb-20 DemandeStage__section__info">
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-orange-300">
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
        <div class="col-span-12 md:col-span-6 max-md:p-10 bg-lime-300">
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
  <script>
  export default {
    name: "AjoutDemandeStage",
  };
  </script>
  