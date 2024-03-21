import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'emailCampaigns',
    component: () =>
      import(
        /* webpackChunkName: "emailCampaigns" */ '@/pages/email-campaigns/EmailCampaignsPage.vue'
      )
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const isAuthenticated = false

  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
