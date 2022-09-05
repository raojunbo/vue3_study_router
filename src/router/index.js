import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import Message from '../views/Message.vue'
import News from '../views/News.vue'

// 该文件是创建整个应用的路由器
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      children:[
        {
          path:'message',
          name:'message',
          component:Message
        },
        {
          path:'news',
          name:'news',
          component:News
        }
      ]
    }
  ]
})

export default router
