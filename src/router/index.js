import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: 'auth/login',
    name: 'auth.login',
    component: () => import('../views/auth/login')
  },
  {
    path: 'auth/register',
    name: 'auth.register',
    component: () => import('../views/auth/register')
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
