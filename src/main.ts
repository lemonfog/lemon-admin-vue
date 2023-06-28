// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store';

import 'ant-design-vue/dist/reset.css';
// import '@unocss/reset/tailwind-compat.css'

import 'nprogress/nprogress.css';

import 'uno.css'

const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
