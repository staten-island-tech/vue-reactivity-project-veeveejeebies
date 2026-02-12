
import albums from '@/views/albums.vue' 
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
