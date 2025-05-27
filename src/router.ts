import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import LandingPage from "./views/LandingPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route for 404
];

const router = createRouter({
  history: createWebHistory(), // Changed from createMemoryHistory
  routes,
});

export default router;
