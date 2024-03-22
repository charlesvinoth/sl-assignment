import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/LoginPage.vue')
  },
  {
    path: '/',
    name: 'allLeads',
    component: () => import(/* webpackChunkName: "allLeads" */ '@/pages/all-leads/AllLeadsPage.vue')
  },
  {
    path: '/master-inbox',
    name: 'masterInbox',
    component: () =>
      import(/* webpackChunkName: "masterInbox" */ '@/pages/master-inbox/MasterInboxPage.vue')
  },
  {
    path: '/email-campaigns',
    name: 'emailCampaigns',
    component: () =>
      import(
        /* webpackChunkName: "emailCampaigns" */ '@/pages/email-campaigns/EmailCampaignsPage.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const isAuthenticated = store.getters.isAuthenticated

  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
