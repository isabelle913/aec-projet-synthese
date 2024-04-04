<template>
    <div class="DemandeStage__Titre">
      <h1>Ajouter une offre de stage</h1>
    </div>
  
    <section class="bg-white p-10 DemandeStage__section">
      <div v-if="showSuccessMessage" class="text-green-500 mt-4">
        Offre de stage ajoutée avec succès !
      </div>
  
      <!-- Formulaire pour ajouter une offre de stage -->
      <div>
        <!-- Champs existants pour l'offre de stage ici -->
  
        <!-- Formulaire pour ajouter un candidat -->
        <h3>Ajouter un candidat</h3>
  
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="firstName">Prénom</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: John"
            type="text"
            v-model="firstName"
            name="firstName"
            id="firstName"
          />
          <p v-if="isError.firstName" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire le prénom du candidat</p>
        </div>
  
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="lastName">Nom de famille</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: Doe"
            type="text"
            v-model="lastName"
            name="lastName"
            id="lastName"
          />
          <p v-if="isError.lastName" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire le nom de famille du candidat</p>
        </div>
  
        <div class="mb-16 mr-2">
          <label class="text-bg font-bold" for="email">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: john.doe@example.com"
            type="email"
            v-model="email"
            name="email"
            id="email"
          />
          <p v-if="isError.email" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire l'email du candidat</p>
        </div>
  
        <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="address">Adresse</label>
            <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: 123 rue Example"
            type="text"
            v-model="address"
            name="address"
            id="address"
            />
            <p v-if="isError.address" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire l'adresse du candidat</p>
        </div>

        <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="phone">Téléphone</label>
            <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: (123) 456-7890"
            type="tel"
            v-model="phone"
            name="phone"
            id="phone"
            />
            <p v-if="isError.phone" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire le numéro de téléphone du candidat</p>
        </div>

        <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="city">Ville</label>
            <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: Montréal"
            type="text"
            v-model="city"
            name="city"
            id="city"
            />
            <p v-if="isError.city" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire la ville du candidat</p>
        </div>

        <div class="mb-16 mr-2">
            <label class="text-bg font-bold" for="postalCode">Code Postal</label>
            <input
            class="shadow appearance-none border rounded w-full py-7 px-3 mt-5 leading-tight focus:outline-none focus:shadow-outline input"
            placeholder="Ex.: A1A 1A1"
            type="text"
            v-model="postalCode"
            name="postalCode"
            id="postalCode"
            />
            <p v-if="isError.postalCode" class="col-start-4 col-span-9 text-red-500 text-md italic">Veuillez inscrire le code postal du candidat</p>
        </div>
  
        <!-- Bouton pour ajouter le candidat -->
        <div class="DemandeStage__btn">
          <button
            class="flex items-center text-white border-solid text-2xl py-4 px-4 mt-24 rounded-lg focus:outline-none focus:shadow-outline btn"
            @click="addCandidate"
          >
            Ajouter Candidat
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
 import { ref, onMounted, watch, reactive } from "vue";
 import { useRouter } from "vue-router";
  import CandidatesService from "../services/candidates/candidatesServices";
  
  // Informations sur le candidat
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  // Ajouter d'autres références pour les autres champs requis du candidat
  
  // Fonction pour ajouter un candidat
  const addCandidate = async () => {
    const newCandidate = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      // Ajouter d'autres champs requis du candidat ici
    };
  
    try {
      await CandidatesService.addCandidate(newCandidate);
      console.log("Candidat ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du candidat :", error);
    }
  };
  </script>
  