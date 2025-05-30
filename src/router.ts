import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import LandingPage from "./views/LandingPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
import NotFound from "./views/NotFound.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  { path: "/", component: LandingPage, meta: { title: "PurplePen" } },
  ,
  { path: "/login", component: LoginPage, meta: { title: "Login" } },
  { path: "/register", component: RegisterPage, meta: { title: "Register" } },
  { path: "/home", component: HomePage, meta: { title: "Home" } },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "Page not found" },
  },
].filter(Boolean);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "PurplePen";
});

export default router;
