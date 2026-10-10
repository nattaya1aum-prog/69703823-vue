import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/grade',
    name: 'grade',
    component: () => import( '../views/Grade.vue')
  },
  {
    path: '/golds',
    name: 'golds',
    component: () => import( '../views/Api_golds.vue')
  },
  {
    path: '/products_Api',
    name: 'products_Api',
    component: () => import( '../views/Product_api.vue')
  },
  {
    path: '/products_Table',
    name: 'products_Table',
    component: () => import( '../views/Product_table.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import( '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
