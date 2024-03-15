import { createRouter, createWebHistory } from 'vue-router'
import Authentificator from '../components/Authentificator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Authentificator',
      component: Authentificator
      //component: HomeView
    },
  
  ]
})

export default router
