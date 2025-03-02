/**
 * Use "createWebHistory" when you can configure your server to handle client-side routes directly (no hash). It makes cleaner URLs but requires proper server setup. 

 * Use "createHashHistory" if your environment can’t serve subpaths directly or you want a simpler setup. 

 * Here, "createHashHistory" avoids extra server configuration and ensures routes work even when refreshing.
 */
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
