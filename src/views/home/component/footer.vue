<template>
  <div :class="['mfooter',{fixWidthClass: fixWidthClass}]">
    <div class="contact">
      <span class="iconfont resize">&#xe62c;
        <span>1490459938@qq.com</span>
      </span>
      <a class="alink" href="https://github.com/flfan" target="_blank" rel="noopener noreferrer">
      <span class="iconfont resize">&#xe602;
        <span>GitHub</span>
      </span>
      </a>
    </div>
  </div>
</template>

<script>
// 1753
export default {
  name: 'HomeFooter',
  data () {
    return {
      fixWidth: 1753,
      fixWidthClass: true
    }
  },
  beforeMount () {
    const winWidth = window.innerWidth
    if (winWidth >= this.fixWidth) {
      this.fixWidthClass = true
    } else {
      this.fixWidthClass = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'
.fixWidthClass
  position fixed
  bottom 0
  z-index 5
.mfooter
  width 100%
  // height 80px
  padding px2rem(5) px2rem(10)
  background #d19578
  border-radius 10px 10px 0 0
  box-shadow 0 0 20px 5px rgba(0,0,0,.3)
  box-sizing border-box
  .contact
    display flex
    flex-flow wrap
    justify-content center
    color #5e3c17
    line-height px2rem(25)
    box-sizing border-box
    .alink
      padding-top px2rem(5)
      color #5e3c17
    .resize
      font-size px2rem(20)
      padding px2rem(5) px2rem(10)
      margin-right 20px
      // background red
      &:hover
        color #a16728
        cursor pointer
</style>
