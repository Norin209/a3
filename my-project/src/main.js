import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Add these lines
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/home.css'; // Ensure this is global


createApp(App).use(router).mount('#app')
