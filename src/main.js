import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import { Lazyload } from 'vant';
import FastClick from 'fastclick'
import api from './api/install'
import './assets/style/reset.css'
import 'amfe-flexible/index.js'

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(api) //注入api到实例中
// Vue.use(ElementUI) //引入Element ui
FastClick.attach(document.body);//解决移动端click事件300毫秒延迟

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
