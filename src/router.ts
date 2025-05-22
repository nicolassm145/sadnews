import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import LandingPage from "./views/LandingPage.vue";
import RegisterPage from "./views/RegisterPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(), // Changed from createMemoryHistory
  routes,
});

export default router;
