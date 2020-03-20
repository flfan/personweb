<template>
  <div calss="overlay">
    <div class="bg-blur"></div>
  </div>
</template>

<script>
export default {
  name: 'Overlay'
}
</script>

<style lang="stylus" scoped>
// .overlay
//   // position fixed
//   // width 100%
//   // height 100%
  .bg-blur
    position fixed
    width 100%
    height 100%
    background url('../../../src/assets/images/bgimg.jpg')
    filter blur(4px)
    z-index -1
</style>
