import { createRouter, createWebHistory } from "vue-router";
import Entreprises from "@/views/Entreprises.vue";
import EnterprisesDetails from "@/views/EnterprisesDetails.vue";
import TableauBord from "@/views/TableauBord.vue";
import DemandeStagePage1 from "@/views/DemandeStagePage1.vue";
import DemandeStagePage2 from "@/views/DemandeStagePage2.vue";
import AjoutDemandeStage from "@/views/AjoutDemandeStage.vue";
import Authentificator from "../components/Authentificator.vue";
import Candidats from "@/views/Candidats.vue";
import CandidatDetails from "@/views/CandidatDetails.vue";

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
      path: "/tableau-bord",
      name: "tableau-bord",
      component: TableauBord,
      //component: HomeView
    },
    {
      path: "/demandestagepage1",
      name: "demandestagepage1",
      component: DemandeStagePage1,
      //component: HomeView
    },
    {
      path: "/demande/:_id",
      name: "demandestagepage1",
      component: DemandeStagePage1,
      props: true,
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
      path: "/entreprises",
      name: "entreprises",
      component: Entreprises,
    },
    {
      path: "/enterprise/:id", //router.push({ path: '/enterprise/:id' })  or router.push({ name: 'enterprise', params: { id: id } })
      name: "enterprise",
      component: EnterprisesDetails,
      children: [
        {
          path: ":action", //router.push({ path: '/enterprise/:id/:action' })  or router.push({ name: 'enterprise', params: { id: id, action: 'update' } })
          name: "enterpriseAction",
          component: EnterprisesDetails,
        },
      ],
    },
    {
      path: "/candidats",
      name: "candidats",
      component: Candidats,
    },
    {
      path: "/candidat/:id", //router.push({ path: '/candidats/:id' })  or router.push({ name: 'candidats', params: { id: id } })
      name: "candidat",
      component: CandidatDetails,
      children: [
        {
          path: ":action", //router.push({ path: '/candidats/:id/:action' })  or router.push({ name: 'candidats', params: { id: id, action: 'update' } })
          name: "candidat",
          component: CandidatDetails,
        },
      ],
    },
  ],
});

export default router;