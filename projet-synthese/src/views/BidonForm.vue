<template>
    <div>
      <h2>Formulaire d'ajout d'entreprises</h2>
      <form @submit.prevent="submitForm" class="flex-1">
  
        <label for="name">Nom:</label>
        <input v-model="formData.name" type="text" required>
  
        <label for="address">Adresse:</label>
        <input v-model="formData.address" type="text" required>
  
        <label for="postalCode">Code postal:</label>
        <input v-model="formData.postalCode" type="text" required>
  
        <label for="city">Ville:</label>
        <input v-model="formData.city" type="text" required>
  
        <label for="province">Province:</label>
        <select v-model="selectedProvinceId">
          <option v-for="province in provinces" :value="province._id" :key="province._id">{{ province.value }}</option>
        </select>
  
        <label for="phone">Téléphone:</label>
        <input v-model="formData.phone" type="tel" required>
  
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" required>
  
        <label for="description">Description:</label>
        <textarea v-model="formData.description" required></textarea>
  
        <label for="activitySector">Secteur d'activité:</label>
        <select v-model="selectedActivitySectorId">
          <option v-for="activitySector in activitySectors" :value="activitySector._id" :key="activitySector._id">{{ activitySector.value }}</option>
        </select>
  
        <button type="submit" @click="showPayload">Envoyer</button>
      </form>
      <p v-if="success">Requête POST réussie !</p>
      <p v-else-if="error">Échec de la requête POST.</p>
    </div>
  </template>
  
  <script>
  import useEnterpriseService from "@/services/enterprises/enterprisesServices";
  import getAllProvinces from "@/services/provinces/provincesServices";
  import useActivityServices from "@/services/activitySectors/activitySectorsServices";
  
  export default {
    data() {
      return {
        formData: {
          name: "",
          address: "",
          postalCode: "",
          city: "",
          phone: "",
          email: "",
          description: "",
          province: { _id: "", value: "" },
          activitySector: { _id: "", value: "" },
        },
        provinces: [],
        activitySectors: [],
        selectedProvinceId: "",
        selectedActivitySectorId: "", // Renommez la variable pour correspondre à la nomenclature camelCase
        success: false,
        error: false,
      };
    },
  
    watch: {
      // Observer les changements dans la province sélectionnée
      selectedProvinceId(newVal) {
        const selectedProvince = this.provinces.find(province => province._id === newVal);
        this.formData.province = { _id: selectedProvince._id, value: selectedProvince.value };
      },
  
      // Observer les changements dans le secteur d'activité sélectionné
      selectedActivitySectorId(newVal) {
        const selectedActivitySector = this.activitySectors.find(activitySector => activitySector._id === newVal);
        this.formData.activitySector = { _id: selectedActivitySector._id, value: selectedActivitySector.value };
      }
    },
  
    async mounted() {
      try {
        const [provincesData, activitySectorsData] = await Promise.all([
          getAllProvinces().allProvinces(),
          useActivityServices().allActivitySectors()
        ]);
  
        this.provinces = provincesData;
        this.activitySectors = activitySectorsData;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },
  
    methods: {
      async submitForm() {
        try {
          const service = useEnterpriseService();
          await service.addEnterprises(this.formData);
          this.success = service.success;
          this.error = !service.success;
        } catch (error) {
          console.error('Erreur lors de la soumission du formulaire:', error);
        }
      },

      async showPayload() {
        console.log('Payload:', this.formData);
      },
    }
  };
  </script>
  
  <style scoped>
  input, textarea {
    background-color: aquamarine;
  }
  
  form {
    width: 75%;
    margin: 0 auto;
  }
  
  .flex-1 {
    display: flex;
    flex-direction: column;
  }
  </style>
  