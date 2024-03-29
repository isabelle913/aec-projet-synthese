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
import OffredeStage from "@/views/OffredeStage.vue";
import OffredeStageDetail from "@/views/OffredeStageDetail.vue";

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
      name: "DemandeStagePage1",
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
      path: "/enterprises",
      name: "enterprises",
      component: Entreprises,
    },
  
    {
      path: "/enterprise/:id", //router.push({ path: '/enterprise/:id' })  or router.push({ name: 'enterprise', params: { id: id } })
      name: "enterprise",
      component: EnterprisesDetails,
      children: [
        {
          path: ":action", //router.push({ path: '/enterprise/:id/:action' })  or router.push({ name: 'enterprise', params: { id: id, action: 'update' } })
          name: "enterprise",
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
      path: "/candidats/:id", //router.push({ path: '/candidats/:id' })  or router.push({ name: 'candidats', params: { id: id } })
      name: "candidats",
      component: CandidatDetails,
      children: [
        {
          path: ":action", //router.push({ path: '/candidats/:id/:action' })  or router.push({ name: 'candidats', params: { id: id, action: 'update' } })
          name: "candidats",
          component: CandidatDetails,
        },
      ],
    },
    {
      path: "/OffredeStage",
      name: "OffredeStage",
      component: OffredeStage,
    },
    {
      path: "/OffredeStageDetail/:id", //router.push({ path: '/enterprise/:id' })  or router.push({ name: 'enterprise', params: { id: id } })
      name: "OffredeStageDetail",
      component: OffredeStageDetail,
      children: [
        {
          path: ":action", //router.push({ path: '/enterprise/:id/:action' })  or router.push({ name: 'enterprise', params: { id: id, action: 'update' } })
          name: "OffredeStageDetail",
          component: OffredeStageDetail,
        },
      ],
    },


  ],
});

export default router;
