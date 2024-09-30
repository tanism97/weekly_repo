import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookApi from '../views/GetBookCountView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  }
  ,
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path:'/GetBookCount',
    name:'GetBookCount',
    component: GetBookCountView
  },
  {
    path:'/WeatherView',
    name:'WeatherView',
    component: WeatherView
  }
  ,
  {
    path:'/CountBookApi',
    name:'CountBookApi',
    component: CountBookApi
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router