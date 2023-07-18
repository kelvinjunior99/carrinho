import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
//import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).mount('#app')
