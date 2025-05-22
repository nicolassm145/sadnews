import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import LandingPage from "./views/LandingPage.vue";


const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(), // Changed from createMemoryHistory
  routes,
});

export default router;
