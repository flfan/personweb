<template>
  <div class="home">
    <overlay/>
    <div class="container">
      <home-header/>
      <!-- <home-section/> -->
      <transition name="fade">
        <router-view/>
      </transition>
      <home-footer/>
    </div>
  </div>
</template>

<script>
import HomeHeader from './component/header'
import HomeFooter from './component/footer'
// import HomeSection from './component/section'
import Overlay from '../layout/overlay'
export default {
  components: {
    HomeHeader,
    HomeFooter,
    // HomeSection,
    Overlay
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  // height 100%
  position relative
  .container
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto
</style>
