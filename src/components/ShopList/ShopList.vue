<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <router-link tag="li" class="shop_li border-1px" v-for="(shop, index) in shops" :key="index" to="/shop">
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="baseImgPath + shop.image_path">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" >{{shop.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(support, index) in shop.supports" :key="index">{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">

                <Star :score="shop.rating" :size="24"/>

                <div class="rating_section">
                  {{shop.rating}}
                </div>
                <div class="order_section">
                  月售{{shop.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_left">{{shop.delivery_mode.text}}</span>
                <span class="delivery_style delivery_right">准时达</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{shop.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </router-link>
    </ul>

    <ul v-else>
      <li v-for="i in 8" :key="i">
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  import Star from '../Star/Star'

  export default {
    data () {
      return {
        baseImgPath: 'https://fuss10.elemecdn.com'
      }
    },

    computed: {
      ...mapState(['shops'])
    },

    components: {
      Star
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .shop_container
    margin-bottom 0.5rem
    .shop_list
      .shop_li
        bottom-border-1px(#f1f1f1)
        width 100%
        >a
          clearFix()
          display block
          box-sizing border-box
          padding 0.15rem 0.08rem
          width 100%
          .shop_left
            float left
            box-sizing border-box
            width 23%
            height 0.75rem
            padding-right 0.1rem
            .shop_img
              display block
              width 100%
              height 100%
          .shop_right
            float right
            width 77%
            .shop_detail_header
              clearFix()
              width 100%
              .shop_title
                float left
                width 1.4rem
                color #333333
                font-size 0.16rem
                line-height 0.16rem
                font-weight 7rem // 700
                &::before
                  content '品牌'
                  display inline-block
                  font-size 0.11rem
                  line-height 0.11rem
                  color #333333
                  background-color #ffd930
                  padding 0.02rem
                  border-radius 0.02rem
                  margin-right 0.05rem
              .shop_detail_ul
                float right
                margin-top 0.03rem
                .supports
                  float left
                  font-size 0.1rem
                  color #999999
                  border 0.0rem solid #f1f1f1
                  padding 0 0.02rem
                  border-radius 0.02rem
            .shop_rating_order
              clearFix()
              width 100%
              margin-top 0.18rem
              margin-bottom 0.08rem
              .shop_rating_order_left
                float left
                color #ff9a0d

                .rating_section
                  float left
                  font-size 0.1rem
                  color #ff6000
                  margin-left 0.04rem
                .order_section
                  float left
                  font-size 0.1rem
                  color #666666
                  transform scale(.8)
              .shop_rating_order_right
                float right
                font-size 0
                .delivery_style
                  transform-origin 0.35rem 0
                  transform scale(.7)
                  display inline-block
                  font-size 0.12rem
                  padding 0.01rem
                  border-radius 0.02rem
                .delivery_left
                  color #ffffff
                  margin-right -0.1rem
                  background-color #02a774
                  border 1px solid #02a774
                .delivery_right
                  color #02a774
                  border 1px solid #02a774
            .shop_distance
              clearFix()
              width 100%
              font-size 0.12rem
              .shop_delivery_msg
                float left
                transform-origin 0
                transform scale(.9)
                color #666666
              .segmentation
                color #cccccc
</style>
