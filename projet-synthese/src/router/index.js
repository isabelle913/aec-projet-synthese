import { createRouter, createWebHistory } from "vue-router";
import Authentificator from "../components/Authentificator.vue";
import Entreprises from "@/views/Entreprises.vue";
import EntreprisesDetails from "@/views/EntreprisesDetails.vue";
import TableauBord from "@/views/TableauBord.vue";
import DemandeStagePage1 from "../views/DemandeStagePage1.vue";
import DemandeStagePage2 from "../views/DemandeStagePage2.vue";
import AjoutDemandeStage from "../views/AjoutDemandeStage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Authentificator",
      component: Authentificator,
      //component: HomeView
    },
    {
      path: "/demandestagepage1",
      name: "demandestagepage1",
      component: DemandeStagePage1,
      //component: HomeView
    },
    {
      path: "/demandestagepage2",
      name: "demandestagepage2",
      component: DemandeStagePage2,
      //component: HomeView
    },
    {
      path: "/ajoutdemandestage",
      name: "ajoutdemandestage",
      component: AjoutDemandeStage,
      //component: HomeView
    },
    {
      path: "/tableau-bord",
      name: "tableau-bord",
      component: TableauBord,
    },
    {
      path: "/enterprises",
      name: "enterprises",
      component: Entreprises,
    },
    {
      path: "/enterprise/:id", //router.push({ path: '/enterprise/:id' })  or router.push({ name: 'enterprise', params: { id: id } })
      name: "enterprise",
      component: EntreprisesDetails,
      children: [
        {
          path: ":action", //router.push({ path: '/enterprise/:id/:action' })  or router.push({ name: 'enterprise', params: { id: id, action: 'update' } })
          name: "enterprise",
          component: EntreprisesDetails,
        },
      ],
    },
  ],
});

export default router;
