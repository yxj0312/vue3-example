import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/todo-views',
      name: 'todo-views',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/Teleport.vue'),
    },
    {
      path: '/change-detection',
      name: 'change-detection',
      component: () => import('../views/ChangeDetection.vue'),
    },
  ],
});

export default router;
