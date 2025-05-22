import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from './views/LoginPage.vue'
import HelloWorld from './views/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld, props: { msg: 'Hello Vue + Vite!' } },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(), // Changed from createMemoryHistory
  routes,
})

export default router