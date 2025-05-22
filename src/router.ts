import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from './components/LoginPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router