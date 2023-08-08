import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/product/:itemnumber/:laoname',
    name: 'ItemNumber',
    component: () => import('../views/BarcodeGen.vue')
  },
  {
    path: '/product/:itemnumber/:unitprice',
    name: 'codePrice',
    component: () => import('../views/BarcodePrice.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
