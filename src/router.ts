import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  {path: '/login', component: LoginPage},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router