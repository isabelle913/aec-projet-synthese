import { createRouter, createWebHistory } from "vue-router";
import Authentificator from "../components/Authentificator.vue";
import Entreprises from "../views/Entreprises.vue";
import EntreprisesDetails from "../views/EntreprisesDetails.vue";
import DemandeStagePage1 from "../views/DemandeStagePage1.vue";
import DemandeStagePage2 from "../views/DemandeStagePage2.vue";
import AjoutDemandeStage from "../views/AjoutDemandeStage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Authentificator',
      component: Authentificator
    },
    {
      path: '/DemandeStagePage1',
      name: 'demandestagepage1',
      component: DemandeStagePage1
    },
    {
      path: '/DemandeStagePage2',
      name: 'demandestagepage2',
      component: DemandeStagePage2
    },
    {
      path: '/AjoutDemandeStage',
      name: 'ajoutdemandestage',
      component: AjoutDemandeStage
    },
    {
      path: "/Entreprises",
      name: "entreprises",
      component: Entreprises,
    },
    {
      path: "/Entreprise/:id",
      name: "entrepriseDetails",
      component: EntreprisesDetails,
      children: [
        {
          path: "update", // Example: /entreprise/:id/update
          name: "entrepriseUpdate",
          component: EntreprisesDetails,
        },
      ],
    },
  ],
});

export default router;
