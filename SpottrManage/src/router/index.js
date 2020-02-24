import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld'
import Logs from '../components/Logs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/logs',
    name: 'Logs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Logs.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router