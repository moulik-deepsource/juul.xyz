import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects'),
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
