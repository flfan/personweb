<template>
  <div class="mheader">
    <div class="logo">
      <img class="logo-img" src="@/assets/images/logo.png" alt="logo">
      <div class="logo-text">ZeroBreeze</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'

.mheader
  // width 90%
  height 80px
  padding 10px 10px
  background #d19578
  // position absolute
  // top 20px
  // left 0
  // right 0
  margin 0 auto
  // margin-top 20px
  border-radius 0 0 10px 10px
  box-shadow 0 0 20px 5px rgba(0,0,0,.3)
  box-sizing border-box
  // overflow hidden
  .logo
    display flex
    justify-content flex-start
    .logo-img
      height 60px
    .logo-text
      display flex
      justify-self center
      flex-direction column
      justify-content flex-end
      padding-left 10px
      font-size px2rem(35)
      font-weight bold
      -webkit-background-clip text;
      -webkit-text-fill-color rgba(0, 0, 255, 0)
      background-image linear-gradient(to right, #383139, #534944, #57322a, #603f11)
</style>
