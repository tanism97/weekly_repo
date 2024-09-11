import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const firebaseConfig = {
  apiKey: "AIzaSyBOMTl8s58Q0vu3YbcohYIZODdQ56FCt0w",
  authDomain: "week7-boyu.firebaseapp.com",
  projectId: "week7-boyu",
  storageBucket: "week7-boyu.appspot.com",
  messagingSenderId: "407297888688",
  appId: "1:407297888688:web:223bfec9de717727448675"
};

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
  
initializeApp(firebaseConfig);