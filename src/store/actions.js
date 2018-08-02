import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  logout
} from '../api'

export default {
  // 异步获取当前地址信息
  async getAddress({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const reslut = await reqAddress(geohash)  // {code: 0, data: address}

    if (reslut.code === 0) {
      const address = reslut.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取商品分类列表
  async getCategorys({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const reslut = await reqCategorys()  // {code: 0, data: []}
    if (reslut.code === 0) {
      const categorys = reslut.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取当前地址信息
  async getShops({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const reslut = await reqShops({latitude, longitude})  // {code: 0, data: []}

    if (reslut.code === 0) {
      const shops = reslut.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 先获取到数据再保存，所以是同步的
  // 同步保存user
  saveUser({commit}, user){
    commit(RECEIVE_USER, {user})
  },

  // 异步用户信息
  async getUser({commit, state}) {
    const reslut = await reqUser()  // {code: 0, data: {}}
    if (reslut.code === 0) {
      const user = reslut.data
      commit(RECEIVE_USER, {user})
    }
  },

  // 重置用户信息
  async resetUser({commit}) {
    const reslut = await logout()  // {code: 0, data: {}}
    if (reslut.code === 0) {
      commit(RESET_USER)
    }
  },
}
