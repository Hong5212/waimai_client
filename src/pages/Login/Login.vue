<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()"> <!--回退-->
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background #ffffff
    .loginInner
      padding-top 0.6rem
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 0.4rem
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 0.4rem
          text-align center
          > a
            color #333333
            font-size 0.14rem
            padding-bottom 0.04rem
            &:first-child
              margin-right 0.4rem
            &.on
              color #02a774
              font-weight 7rem //700
              border-bottom 0.02rem solid #02a774
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 0.1rem
              box-sizing border-box
              border 0.01rem solid #dddddd
              border-radius 0.04rem
              outline 0
              font 4rem 0.14rem Arial
              &:focus
                border 0.01rem solid #02a774
            .login_message
              position relative
              margin-top 0.16rem
              height 0.48rem
              font-size 0.14rem
              background #ffffff
              .get_verification
                position absolute
                top 50%
                right 0.1rem
                transform translateY(-50%)
                border 0
                color #cccccc
                font-size 0.14rem
                background transparent
            .login_verification
              position relative
              margin-top 0.16rem
              height 0.48rem
              font-size 0.14rem
              background #ffffff
              .switch_button
                font-size 0.12rem
                border 0.01rem solid #dddddd
                border-radius 0.08rem
                transition background-color .3, border-color .3s
                padding 0 0.06rem
                width 0.3rem
                height 0.16rem
                line-height 0.16rem
                color #ffffff
                position absolute
                top 50%
                right 0.1rem
                transform translateY(-50%)
                &.off
                  background #ffffff
                  .switch_text
                    float right
                    color #dddddd
                &.on
                  background #02a774
                > .switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -0.01rem
                  left -0.01rem
                  width 0.16rem
                  height 0.16rem
                  border 0.01rem solid #dddddd
                  border-radius 50%
                  background #ffffff
                  box-shadow 0 0.02rem 0.04rem 0 rgba(0, 0, 0, .1)
                  transiton transform .3s
            .login_hint
              margin-top 0.12rem
              color #999999
              font-size 0.14rem
              line-height 0.2rem
              > a
                color #02a774
          .login_submit
            display block
            width 100%
            height 0.42rem
            margin-top 0.3rem
            border-radius 0.04rem
            background #4cd96f
            color #ffffff
            text-algin center
            font-size 0.16rem
            line-height 0.42rem
            border 0
        .about_us
          display block
          font-size 0.12rem
          margin-top 0.2rem
          text-align center
          color #999999
      .go_back
        position absolute
        top 0.05rem
        left 0.05rem
        width 0.3rem
        height 0.3rem
        > .iconfont
          font-size 0.2rem
          color #999999
</style>
