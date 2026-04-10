import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import HomeHot from '@/views/Home/HomeHot.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Layout,
    },
    {
      path:"/login",
      component:LoginIndex  
    }
  ],
})

export default router
