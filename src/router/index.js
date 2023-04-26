import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HomeMenu from '../views/HomeMenu.vue'
import StackView from '../views/StackView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMenu
    },
    {
      path: '/stack',
      name: 'stack',
      component: StackView
    },
    {
      path: '/home',
      name: 'home-default',
      component: HomeView
    }
  ]
})
