import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Child from '../views/vueTest/child.vue'
import Parent from '../views/vueTest/parent.vue'
import VueDemo from '../views/vueTest/vueDemo.vue'
Vue.use(VueRouter)

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
    path: '/child',
    name: 'Child',
    component: Child
  },
  {
    path: '/parent',
    name: 'Parent',
    component: Parent
  },
  {
    path: '/vuedemo',
    name: 'VueDemo',
    component: VueDemo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
