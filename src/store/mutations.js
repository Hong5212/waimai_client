/*
vuex的mutations模块
mutation由action触发调用: commit('mutationName')
 */
import Vue from 'vue';

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT
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
  },
  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}){
    state.info = info
  },

  [INCREASE_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count++
    }else{
      Vue.set(food,'count',1)
    }
    // console.log(food.count);
  },
  [DECREASE_FOOD_COUNT](state, {food}){
    if(food.count){
      food.count--
    }
  }
  ,
}
