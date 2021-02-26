import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: 'auth/login',
    name: 'auth.login',
    component: () => import('../views/auth/login')
  },
  {
    path: 'article/:id',
    name: 'article.show'
  },
  {
    path: 'not-found',
    name: 'not-found',
    component: () => import('../views/404')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
