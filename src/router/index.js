import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/partners",
    name: "Product-Page",
    component: () => import("../views/Product-Page.vue"),
  },
  {
    path: "/photos",
    name: "Product-Item-Page",
    component: () => import("../views/Product-Item-Page.vue"),
  },
  {
    path: "/services",
    name: "Product-Cart",
    component: () => import("../views/Product-Cart.vue"),
  },
  {
    path: "/contacts",
    name: "Personal-Area",
    component: () => import("../views/Personal-Area.vue"),
  },
  {
    path: "/posts",
    name: "Closet-Planner",
    component: () => import("../views/Closet-Planner.vue"),
  },
  {
    path: "/login",
    name: "Log-In",
    component: () => import("../views/Log-In.vue"),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
