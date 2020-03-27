<template>
  <div class="item" ref="item">
    <!-- <a :href="iteminfo.linkto" target="_blank"> -->
      <div class="wapper" @click.prevent="handleClick">
        <div class="img-wapper">
          <img class="bg-img" :src="iteminfo.imgsrc">
        </div>
        <div class="text-wapper">
          <h1 class="text">{{iteminfo.title}}</h1>
          <p class="description">
            <span class="em"></span> {{iteminfo.description}}
          </p>
        </div>
      </div>
      <!-- <transition name="fade">
        <div class="clickShow" v-show="isshow">
          <project-detail @ProDetChange="HandleProDetChange"/>
        </div>
      </transition> -->
    <!-- </a> -->
  </div>
</template>

<script>
// import ProjectDetail from '../../detail/project-detail/project-detail'

export default {
  name: 'ProjectItem',
  // components: {
  //   // ProjectDetail
  // },
  // data () {
  //   return {
  //     isshow: false
  //   }
  // },
  props: {
    iteminfo: {
      type: Object,
      required: true
    },
    index: Number
  },
  mounted () {
    setTimeout(() => {
      this.$refs.item.style.opacity = 1
      // console.log(this.$refs.item)
      // // this.isshow = true
    }, this.index * 500 + 500)
  },
  methods: {
    handleClick () {
      // console.log(this.iteminfo)
      // if (!this.isshow) {
      //   this.isshow = true
      // }
      this.$emit('proItemChange', this.iteminfo)
    }
    // HandleProDetChange () {
    //   if (this.isshow) {
    //     this.isshow = false
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'
.item
  opacity 0
  transition all 0.5s ease
.wapper
  width 350px
  height 500px
  // width px2rem(350)
  // height px2rem(500)
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
    transform scale(1.05)
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
  .img-wapper
    height 50%
    overflow hidden
    .bg-img
      width 100%
      border-radius 10px 10px 0 0
      z-index -1

</style>
