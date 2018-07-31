/*
入口js
 */
import Vue from 'vue'

import app from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(app),
  router, // 配置路由器
  store, // 注册store
})
