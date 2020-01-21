import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: '/client',
          component: () => import('@/views/Client.vue')
        },
        {
          path: '/invoices',
          component: () => import('@/views/Invoices.vue')
        },
        {
          path: '/invoice/:id',
          component: () => import('@/views/ViewInvoice.vue')
        },
        {
          path: '/new-client',
          component: () => import('@/views/NewClient.vue')
        },
        {
          path: '/new-invoice',
          component: () => import('@/views/NewInvoice.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/layouts/Auth.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Auth/Login.vue')
        },
        {
          path: 'login',
          component: () => import('@/views/Auth/SignIn.vue')
        }
      ]
    }
  ]
})