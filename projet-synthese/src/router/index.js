import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Entreprises from "@/views/Entreprises.vue";
import EnterprisesDetails from "@/views/EntreprisesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
