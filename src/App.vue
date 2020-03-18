<template>
  <div id="app">
    <router-view/>
    <!-- <a class="linkTo" href="./vuegowhere">vuegowhere</a> -->
  </div>
</template>

<script>
export default {
}
// 配置rem
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="stylus" scoped>
#id
  width 100%
  // height 100%
.linkTo
  // font-size px2rem(20)
  color red
</style>
