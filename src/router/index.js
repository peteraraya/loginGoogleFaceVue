import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from "@/firebase"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/ingreso',
      name: 'ingreso',// route level code-splitting
      component: () => import(/* webpackChunkName: "Ingreso " */ '../views/Ingreso.vue')
    }
  ]
})
  router.beforeEach((to, from, next) => {
    const user = auth.currentUser
    if (to.matched.some(record => record.meta.requiresAuth)) {

      if (user) {
        // si el usuario existe dejalo pasar donde quiera
        next()
      } else {
        // cualquier otra opcion lo envia al next
        next({ name: 'ingreso' })
      }
    } else {
      next() // make sure to always call next()!
    }
  })





export default router;
