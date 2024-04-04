import { createRouter, createWebHistory } from "vue-router";
import Entreprises from "@/views/Entreprises.vue";
import EntrepriseDetails from "@/views/EntrepriseDetails.vue";
import TableauBord from "@/views/TableauBord.vue";
import DemandeStagePage1 from "@/views/DemandeStagePage1.vue";
import DemandeStagePage2 from "@/views/DemandeStagePage2.vue";
import AjoutDemandeStage from "@/views/AjoutDemandeStage.vue";
import Authentificator from "../components/Authentificator.vue";
import Candidats from "@/views/Candidats.vue";
import CandidatDetails from "@/views/CandidatDetails.vue";
import Offres from "@/views/Offres.vue";
import Demandes from "@/views/Demandes.vue";
import OffredeStage from "@/views/OffredeStage.vue";
import OffredeStageAjout from "@/views/OffredeStageAjout.vue";
import OffredeStageDetail from "@/views/OffredeStageDetail.vue";
import OffredeStageEdit from "@/views/OffredeStageEdit.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Authentificator",
      component: Authentificator,
    },
    {
      path: "/tableau-bord",
      component: TableauBord,
      name: "tableau-bord",
    },
    {
      path: "/demandes",
      name: "demandes",
      component: Demandes,
    },
    {
      path: "/demandestagepage1",
      name: "demandestagepage1",
      component: DemandeStagePage1,
    },
    {
      path: "/demande/:_id",
      name: "demandestagepage1",
      component: DemandeStagePage1,
      props: true,
    },
    {
      path: "/demande/_:id",
      name: "demande",
      component: DemandeStagePage1,
      children: [
        {
          path: ":action",
          name: "demande",
          component: DemandeStagePage1,
        },
      ],
    },
    {
      path: "/demandestagepage2",
      name: "demandestagepage2",
      component: DemandeStagePage2,
    },
    {
      path: "/ajoutdemandestage",
      name: "ajoutdemandestage",
      component: AjoutDemandeStage,
    },
    {
      path: "/offres",
      name: "offres",
      component: Offres,
    },
    {
      path: "/OffredeStage",
      name: "OffredeStage",
      component: OffredeStage,
    },
    {
      path: "/OffredeStageAjout",
      name: "OffredeStageAjout",
      component: OffredeStageAjout,
    },
    {
      path: "/OffredeStage/:id",
      name: "OffredeStageEdit",
      component: OffredeStageEdit,
    },
    {
      path: "/OffredeStage/:id",
      name: "OffredeStageDetail",
      component: OffredeStageDetail,
    },
    {
      path: "/candidats",
      name: "candidats",
      component: Candidats,
    },
    {
      path: "/candidat/:id",
      name: "candidat",
      component: CandidatDetails,
      children: [
        {
          path: ":action",
          name: "candidat",
          component: CandidatDetails,
        },
      ],
    },
    {
      path: "/entreprises",
      name: "entreprises",
      component: Entreprises,
    },
    {
      path: "/entreprise/:id",
      name: "entreprise",
      component: EntrepriseDetails,
      children: [
        {
          path: ":action",
          name: "entreprise",
          component: EntrepriseDetails,
        },
      ],
    },
    {
      path: "/:patchMatch(.*)*",
      component: TableauBord,
    },
  ],
});

export default router;
