import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/components/Log-in.vue';
import Dashboard from '@/components/Dashboard.vue';

const routes = [
  { path: '/Login', component: LogIn },
  { path: '/dashboard', component: Dashboard },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
