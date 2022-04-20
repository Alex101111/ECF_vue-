import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MaCollection',
    name: 'MaCollection',
    component: () => import('../views/MaCollection.vue')
  },
  {
    path: '/CardDetail/:cardId',
    name: 'CardDetail',
    component: () => import('../views/CardDetail.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
