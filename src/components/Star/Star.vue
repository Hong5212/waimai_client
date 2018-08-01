<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(c, index) in starClasses" :key="index"  :class="c"></span>
  </div>
</template>
<script>
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';

  export default {
    props: {
      score: Number,
      size: Number
    },

    computed: {
      // 由5个类名组成的数组
      /*
      3.5: 3 + 1 + 1
       */

      starClasses(){
        const scs = []

        const {score} = this

        // 保存n个CLASS_ON
        const starInteger = Math.floor(score)
        for(let i = 0; i < starInteger; i++){
          scs.push(CLASS_ON)
        }

        // 保存1/0个CLASS_HALF
        if(score*10 - starInteger*10 >= 5){
          scs.push(CLASS_HALF)
        }

        // 保存n个CLASS_OFF
        while (scs.length < 5){
          scs.push(CLASS_OFF)
        }

        // console.log(scs);
        return scs
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 0.2rem
        height 0.2rem
        margin-right 0.22rem
        background-size 0.2rem 0.2rem
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 0.15rem
        height 0.15rem
        margin-right 0.06rem
        background-size 0.15rem 0.15rem
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')

    &.star-24
      .star-item
        width 0.1rem
        height 0.1rem
        margin-right 0.03rem
        background-size 0.1rem 0.1rem
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
