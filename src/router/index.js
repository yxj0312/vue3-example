import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/teleport',
      component: () => import('../views/Teleport.vue'),
    },
  ],
});

export default router;
