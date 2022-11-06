import { createRouter, createWebHistory } from 'vue-router'
import AddMenu from '../views/AddMenu.vue'

const routes = [
  {
    path: '/AddMenu',
    name: 'AddMenu',
    component: AddMenu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
