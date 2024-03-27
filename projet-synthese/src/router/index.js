import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Entreprises from "@/views/Entreprises.vue";
import EnterprisesDetails from "@/views/EnterprisesDetails.vue";
import TableauBord from "@/views/TableauBord.vue";
import DemandeStagePage1 from "@/views/DemandeStagePage1.vue";
import DemandeStagePage2 from "@/views/DemandeStagePage2.vue";
import AjoutDemandeStage from "@/views/AjoutDemandeStage.vue";
import Authentificator from "../components/Authentificator.vue";

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
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
  ],
});

export default router;
