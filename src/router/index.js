import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from  '../views/Dashboard.vue'
import NewClip from '../views/NewClip.vue'
import Register from '../views/Register.vue'
import Video from '../views/Video.vue'
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/newclip',
    name: 'NewClip',
    component: NewClip
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
