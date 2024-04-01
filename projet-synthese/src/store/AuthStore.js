import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    nom: '',
    email: '',
  }),
  actions: {
    updateCredentials(isAuthenticated, nom, email) {
      this.isAuthenticated = isAuthenticated;
      this.nom = nom;
      this.email = email;
      console.log('Credentials updated:', { isAuthenticated, nom, email }); // Ajout du console.log
    },
  },
});
