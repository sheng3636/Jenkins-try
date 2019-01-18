// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import Axios from 'axios'
import Vuex from 'vuex'
import BaiduMap from 'vue-baidu-map'
import scroll from 'vue-seamless-scroll'
import store from './vuex'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(scroll)
Vue.use(BaiduMap, {
  ak: 'RqCR47nY9xHXGRIxuQ2vuB73pwLPItgw'
})
// const host = process.env.NODE_ENV === 'development' ? '/api' : 'http://172.31.27.15:8080' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
// const instance = Axios.create({
//   baseURL: host
// })
// console.log(process.env.NODE_ENV)
// Vue.prototype.$http = instance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
