<template>
  <section class="search">
    <HeaderTop title="搜索"></HeaderTop>

    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
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

  .search //搜索
    width 100%
    .search_form
      clearFix()
      margin-top 0.45rem
      background-color #ffffff
      padding 0.12rem 0.08rem
      input
        height 0.35rem
        padding 0 0.04rem
        border-radius 0.02rem
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 0.04rem solid #f2f2f2
          font-size 0.14rem
          color #333333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 0.04rem solid #02a774
          font-size 0.16rem
          color #ffffff
          background-color #02a774
</style>
