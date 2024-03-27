import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Entreprises from "@/views/Entreprises.vue";
import EntreprisesDetails from "@/views/EntreprisesDetails.vue";
import TableauBord from "@/views/TableauBord.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
