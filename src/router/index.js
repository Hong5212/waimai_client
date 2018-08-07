/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用import()引入模块, webpack会对组件进行拆分(单独)打包(code split)
/*import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'*/

const Msite = () => import('../pages/Msite/Msite')
const Search = () => import('../pages/Search/Search')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')

import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

// test
import a from '../pages/test/a'
import b from '../pages/test/b'
import b1 from '../pages/test/b1'
import b2 from '../pages/test/b2'

// 使用插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite, // 返回组件的函数, 需要时才执行从后台请求获取对应的打包文件
      meta: {showFooter: true}
    },
    {
      path: '/search',
      component: Search,
      meta: {showFooter: true}
    },
    {
      path: '/order',
      component: Order,
      meta: {showFooter: true}
    },
    {
      path: '/profile',
      component: Profile,
      meta: {showFooter: true}
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/a',
      component: a
    },
    {
      path: '/b',
      component: b,
      children: [
        {
          path: '/b/b1',
          component: b1
        },
        {
          path: '/b/b2',
          component: b2
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from, Vue.$store);
  /*const userid = Vue.$store.state.user._id
  const {path} = to
  if(!userid && (path === '/a' || path === '/b')){
    return next('/login') // 自动跳转到登录
  }*/
  next() // 放行
})


export default router

