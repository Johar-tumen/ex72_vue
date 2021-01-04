import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/Home.vue')
  },
  {
    path: "/detailrecord",
    name: "DetailRecord",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/DetailRecord.vue')
  },
  {
    path: "/History",
    name: "History",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/History.vue')
  },
  {
    path: "/Planing",
    name: "Planing",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/Planing.vue')
  },
  {
    path: "/Profile",
    name: "Profile",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/Profile.vue')
  },
  {
    path: "/Record",
    name: "Record",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/Record.vue')
  },
  {
    path: "/Register",
    name: "Register",
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: "/login",
    name: "login",
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: "/categories",
    name: "categories",
    meta: {layout: 'dashboard'},
    component: () => import('../views/dashboard/Categories.vue')
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
