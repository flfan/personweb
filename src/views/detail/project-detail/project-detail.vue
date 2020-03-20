<template>
  <div class="wrapper" @click="handleWrapperClick">
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleWrapperClick () {
      this.$emit('ProDetChange')
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 100%
  position fixed
  background rgba(0, 0, 0, .5)
  top 0
  bottom 0
  left 0
  right 0
  z-index 10
  .container
    width 80%
    height @width
    background #ffffff
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    border-radius 10px
</style>
