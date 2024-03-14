import { createRouter, createWebHistory } from 'vue-router'
import TableauBord from '../TableauBord.vue'
import DemandeStage from '../DemandeStage.vue'
import OffreStage from '../OffreStage.vue'
import Candidats from '../Candidats.vue'
import AjouterOffreStage from '../AjouterOffreStage.vue'
import AjouterDemandeStage from '../AjouterDemandeStage.vue'
import AjouterEntreprise from '../AjouterEntreprise.vue'
import AjouterCandidat from '../AjouterCandidat.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: TableauBord
    },
    {
      path: "/enterprises",
      name: "enterprises",
      component: Entreprises,
    },
    {
      path: "/enterprise/:id", 
      name: "enterprise",
      component: EnterprisesDetails,
      children: [
        {
          path: ":action", 
          name: "enterprise",
          component: EnterprisesDetails,
        },
      ],
    },
    {
      path: "/demandestage",
      name: "demandestage",
      component: DemandeStage,
    },
    {
      path: "/offrestage",
      name: "offrestage",
      component: OffreStage,
    },
    {
      path: "/candidats",
      name: "candidats",
      component: Candidats,
    },
    {
      path: "/ajouteroffrestage",
      name: "ajouteroffrestage",
      component: AjouterOffreStage,
    },
    {
      path: "/ajouterdemandestage",
      name: "ajouterdemandestage",
      component: AjouterDemandeStage,
    },
    {
      path: "/ajouterentreprise",
      name: "ajouterentreprise",
      component: AjouterEntreprise,
    },
    {
      path: "/ajoutercandidat",
      name: "ajoutercandidat",
      component: AjouterCandidat,
    },
  ]
})

export default router
