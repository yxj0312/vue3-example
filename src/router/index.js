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
    {
      path: '/change-detection',
      component: () => import('../views/ChangeDetection.vue'),
    },
  ],
});

export default router;
