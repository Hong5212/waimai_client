<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <a class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a class="header_login" slot="right">
        <span class="header_login_text">登录 | 注册</span>
      </a>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
            <!--<a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>-->
          </div>
          <!--<div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>-->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {

    data() {
      return {
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },

    computed: {
      ...mapState(['address', 'categorys']),

      // 根据一维数据categorys生成一个二维数组categorysArr
      categorysArr() {
        // 二维空数组
        const arr = [];

        // 内部小空数组
        let smallArr = [];

        // 遍历一维数组
        this.categorys.forEach(c => {

          // 将空/新的数组需要放到大数组
          if (smallArr.length === 0) {
            arr.push(smallArr)
          }

          // 保存到小数组中
          smallArr.push(c)

          if (smallArr.length === 8) {
            smallArr = []
          }
        })

        // console.log(arr);
        return arr
      },
    },

    mounted() {
      // 请求后台获取shops
      this.$store.dispatch('getShops')

      // 请求后台获取categorys
      this.$store.dispatch('getCategorys')

      // 使用定时器不是太好(时间不好判断)
      /*setTimeout(() => {
        // 创建Swiper的实例对象, 实现轮播(必须在列表数据显示之后)
        new Swiper('.swiper-container', {
          loop: true, // 循环轮播
          pagination: {  // 分页器
            el: '.swiper-pagination',
          },
        })
      }, 1000)*/
    },

    watch: {
      // watch的回调函数是同步执行的
      categorys(val) { // categorys已更新到状态中了, 后面才异步更新界面

        // 调用 vm.$nextTick( [callback] )  将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
        this.$nextTick(()=>{

          new Swiper('.swiper-container', {
            loop: true, // 循环
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },

    components: {
      HeaderTop,
      ShopList
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 0.45rem
      height 2rem
      background #ffffff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 0.1rem
                font-size 0
                img
                  display inline-block
                  width 0.5rem
                  height 0.5rem
              span
                display block
                width 100%
                text-align center
                font-size 0.13rem
                color #666666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 0.1rem
      background #ffffff
      .shop_header
        padding 0.1rem 0.1rem 0
        .shop_icon
          margin-left 0.05rem
          color #999999
        .shop_header_title
          color #999999
          font-size 0.14rem
          line-height 0.2rem

</style>
