/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'

import app from './App'
import router from './router'
import store from './store'

// 注册全局组件标签
Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  render: h => h(app),
  router, // 配置路由器
  store, // 注册store, 全局都有一个$store
})
