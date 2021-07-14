import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

// 引入封装的异步请求
import request from './utils/request'
Vue.prototype.request = request
//把vuex定义为全局组件
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
