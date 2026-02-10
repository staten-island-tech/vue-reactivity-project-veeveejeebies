
import Project from '@/views/Project.vue' 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 {
      path: '/',
      name: 'home',
      component: Project,
    },

  ],
})

export default router
