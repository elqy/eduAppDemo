import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyStudy from '../views/MyStudy.vue'
import ZhangHao from '../views/ZhangHao.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/MyStudy',
		name: 'MyStudy',
		component: MyStudy
	},
	{
		path: '/ZhangHao',
		name: 'ZhangHao',
		component: ZhangHao
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
export default router
