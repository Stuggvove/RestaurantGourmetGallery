import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import MainMenu from './pages/MainMenu.vue';
import Payment from './pages/Payment.vue';

const app = createApp(App)

const routes = [
  { path: '/', name: 'MainMenu', component: MainMenu },
  { path: '/payment', name: 'Payment', component: Payment }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
