import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: tableauBord
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
