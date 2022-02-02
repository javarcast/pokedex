import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/about/Index.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '@/views/pokemon/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
