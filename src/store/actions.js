import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'
import {reqAddress, reqCategorys, reqShops} from '../api'

export default {
  // 异步获取当前地址信息
  async getAddress({commit, state}){
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const reslut = await reqAddress(geohash)  // {code: 0, data: address}

    if(reslut.code === 0){
      const address = reslut.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取商品分类列表
  async getCategorys({commit, state}){
    // 调用接口请求函数从后台获取数据
    const reslut = await reqCategorys()  // {code: 0, data: []}
    if(reslut.code === 0){
      const categorys = reslut.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取当前地址信息
  async getShops({commit, state}){
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const reslut = await reqShops({latitude, longitude})  // {code: 0, data: []}

    if(reslut.code === 0){
      const shops = reslut.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
