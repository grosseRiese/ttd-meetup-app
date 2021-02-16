import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/eventInfo/:id',
    name: 'EventInfo',
    component: () => import('@/views/EventInfo.vue')
  },
  {
    path: '/myEvents',
    name: 'YourAccount',
    component: () => import('@/components/MyEvents.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
