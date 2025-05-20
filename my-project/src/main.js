import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Add these lines
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/newhome.css'; // Ensure this is global
import '@fortawesome/fontawesome-free/css/all.min.css';


createApp(App).use(router).mount('#app')
