<template>
  <div>
    <h2>b.vue---必须已登录</h2>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/b/b1" replace>b1111</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/b/b2" replace>b2222</router-link>
      </div>

      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        &.router-link-active
          color #02a774
</style>
