import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
