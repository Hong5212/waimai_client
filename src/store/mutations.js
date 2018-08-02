/*
vuex的mutations模块
mutation由action触发调用: commit('mutationName')
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  // 传入的是包含address的对象
  [RECEIVE_ADDRESS](state, {address}){
    // 更新state的address属性
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER](state, {user}){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  }
}
