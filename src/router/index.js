import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/components/Log-in.vue';
import Dashboard from '@/components/Dashboard.vue';

const routes = [
  { path: '/Login', component: LogIn },
  { path: '/Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust this according to your auth logic
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/Login');
  } else {
    next();
  }
});

export default router;
