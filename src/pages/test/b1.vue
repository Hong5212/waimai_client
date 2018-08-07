<template>
    <div>b1111.vue</div>
</template>

<script>
  export default {
    mounted(){
      this.intervalId = setInterval(() => {
        console.log('b1 每隔3s干点事');
      }, 3000)
    },

    beforeDestroy(){
      console.log('b1 beforeDestroy()...');
      clearInterval(this.intervalId)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
