import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VueMeta from 'vue-meta';
Vue.use(VueRouter);
Vue.use(VueMeta, {refreshOnceOnNavigation: true});

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
    path: '/car',
    name: 'Car',
    component: () => import('../views/Car.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/laugh',
    name: 'Laugh',
    component: () => import('../views/Laugh.vue')
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: () => import('../views/Drivers.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('../views/Teams.vue')
  },
  {
    path: '/2022/',
    name: '2022-home',
    component: () => import('../views/2022/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
