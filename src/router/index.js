import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoom from '../views/ChatRoom'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
