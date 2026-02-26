import { createRouter, createWebHistory } from 'vue-router'
// Change this line to point to the actual file in your sidebar
import albums from '@/App.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: albums,
    },
  ],
})

export default router