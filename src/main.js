import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
//把vuex定义为全局组件
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
