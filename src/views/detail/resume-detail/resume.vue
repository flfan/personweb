<template>
  <div class="resume">
    <div class="text">
      下载地址:
    </div>
    <a href="http://www.zerobreeze.ink/resume/resume.pdf" target="_blank">我的简历</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'
.resume
  height 90vh
  font-size px2rem(20)
  color #5e3c17
  display flex
  justify-content center
  align-items center
  .text
    font-weight bolder
    margin-right 20px
  a
    color #5e3c17
    &:hover
      color #a16728
      cursor pointer
</style>
