<template>
  <div class="item">
    <div class="wapper">
      <img class="bg-img" :src="iteminfo.imgsrc">
      <div class="text-wapper">
        <h1 class="text">{{iteminfo.title}}</h1>
        <p class="description">
          <span class="em">描述：</span> {{iteminfo.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionItem',
  data () {
    return {
    }
  },
  props: {
    iteminfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'
.wapper
  width 350px
  height 500px
  // padding 20px
  position relative
  box-sizing border-box
  font-size px2rem(20)
  margin 20px 0
  background #cca98f
  box-shadow 0 0 20px rgba(0,0,0,.3)
  border-radius 10px
  transition transform .4s ease
  overflow hidden
  &:hover
    transform scale(1.1)
    cursor pointer
  .text-wapper
    padding 10px 20px
    color #5e3c17
    line-height px2rem(35px)
    .text
      font-weight bold
    .description
      .em
        font-weight bold
  .bg-img
    // width 100%
    height 50%
    // top 0
    // left 0
    // position absolute
    // background url('../../../../src/assets/images/gfda.jpg')
    // background-position center center
    // background-repeat no-repeat
    // background-size cover
    // filter blur(10px)
    border-radius 10px 10px 0 0
    z-index -1

</style>
