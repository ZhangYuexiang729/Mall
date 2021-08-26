import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import VueParticles from 'vue-particles'

createApp(App).use(store).use(ElementPlus).use(VueParticles).use(router).mount('#app')
