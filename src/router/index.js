import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import(/* webpackChunkName: "start" */ '@/views/Start.vue')
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import(/* webpackChunkName: "questions" */ '@/views/Questions.vue')
  },
  {
    path: '/correctAnswers',
    name: 'correctAnswers',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/CorrectAnswers.vue')
  },
  {
    path: '/incorrectSleep',
    name: 'incorrectSleep',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectSleep.vue')
  },
  {
    path: '/incorrectJob',
    name: 'incorrectJob',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectJob.vue')
  },
  {
    path: '/incorrectTime',
    name: 'incorrectTime',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectTime.vue')
  },
  {
    path: '/incorrectAlone',
    name: 'incorrectAlone',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectAlone.vue')
  },
  {
    path: '/incorrectPhysical',
    name: 'incorrectPhysical',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectPhysical.vue')
  },
  {
    path: '/incorrectSkills',
    name: 'incorrectSkills',
    component: () => import(/* webpackChunkName: "answers" */ '@/components/Answers/IncorrectSkills.vue')
  },
  {
    path: '/pageApi',
    name: 'pageApi',
    component: () => import(/* webpackChunkName: "Api" */ '@/components/pageApi.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
