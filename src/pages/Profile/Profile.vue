<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>

    <router-link class="profile-number" tag="div" to="/login">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
      </a>
    </router-link>

    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
  </section>
</template>
<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .profile //我的
    width 100%
    .profile-number
      margin-top 0.455rem
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 0.2rem 0.1rem
        .profile_image
          float left
          width 0.6rem
          height 0.6rem
          border-radius 50%
          overflow hidden
          vertical-align top
          .icon-person
            background #e4e4e4
            font-size 0.62rem
        .user-info
          float left
          margin-top 0.08rem
          margin-left 0.15rem
          p
            font-weight: 700
            font-size 0.18rem
            color #fff
            &.user-info-top
              padding-bottom 0.08rem
            .user-icon
              display inline-block
              margin-left -0.15rem
              margin-right 0.05rem
              width 0.2rem
              height 0.2rem
              .icon-mobile
                font-size 0.3rem
                vertical-align text-top
            .icon-mobile-number
              font-size 0.14rem
              color #fff
        .arrow
          width 0.12rem
          height 0.12rem
          position absolute
          right 0.15rem
          top 40%
          .icon-jiantou1
            color #fff
            font-size 0.05rem
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #ffffff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 0.01rem solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 0.14rem
            color #333333
            padding 0.15rem 0.05rem 0.1rem
            span
              dispaly inline-block
              font-size 0.3rem
              color #ff9900
              font-weight 7rem //700
              line-height 0.3rem
          .info_data_bottom
            display inline-block
            font-size 0.14rem
            color #666666
            font-weight 4rem //400
            padding-bottom 0.1rem
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 0.1rem
      background #ffffff
      .my_order
        display flex
        align-items center
        padding-left 0.15rem
        >span
          display flex
          align-items center
          width 0.2rem
          height 0.2rem
          >.iconfont
            margin-left -0.1rem
            font-size 0.3rem
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #ff9900
          .icon-fuwu
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 0.18rem 0.1rem 0.18rem 0
          font-size 0.16rem
          color #333333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 0.1rem
            height 0.1rem
            .icon-jiantou1
              color #bbbbbb
              font-size 0.1rem
</style>
