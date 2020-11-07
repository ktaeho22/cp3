import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Music from '../views/music.vue'
import Tour from '../views/tour.vue'
import Questions from '../views/questions.vue'
import Bio from '../views/bio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
