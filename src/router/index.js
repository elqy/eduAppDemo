import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 注册vue路由
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mystudy',
    name: 'mystudy',
    component: () => import('../views/MyStudy.vue')
  },
  {
    path: '/zhanghao',
    name: 'zhanghao',
    component: () => import('../views/ZhangHao.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 向外暴露路由器对象
export default router
