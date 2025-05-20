import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ProductList from './pages/ProductList.vue' // We’ll create this next

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
