import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import(/* webpackChunkName: "questions" */ '../views/Questions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
