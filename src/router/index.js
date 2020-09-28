import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/todo-view',
      component: () => import('../views/TodoView.vue'),
    },
  ],
});

export default router;
