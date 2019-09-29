import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: '首页'
    }
    },
    {
      path: '/menuPage',
      name: 'menuPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Menu.vue'),
      meta:{
        title: '选择咖啡与小食'
    }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/Order.vue'),
      meta:{
        title: '订单列表'
    }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import(/* webpackChunkName: "about" */ './views/Shopcart.vue'),
      meta:{
        title: '购物车'
    }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import(/* webpackChunkName: "about" */ './views/Me.vue'),
      meta:{
        title: '我的'
    }
    }
  ]
})
