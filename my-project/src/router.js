import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import ProductList from './pages/ProductList.vue';
import News from './pages/News.vue';
import Cart from './pages/Cart.vue';
import LoginPage from './pages/Login.vue';
import ContactUsPage from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/about', component: About },
  { path: '/news', component: News },
  { path: '/cart', component: Cart },
  { path: '/login', component: LoginPage },
  { path: '/contact', component: ContactUsPage }
];

const router = createRouter({
  history: createWebHashHistory(), // ← changed this line
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
