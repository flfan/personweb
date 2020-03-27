<template>
  <div class="wrapper">
    <div class="close iconfont" @click="handleWrapperClick">&#xe689;</div>
    <div class="container">
      <!-- <div class="close iconfont" @click="handleWrapperClick">&#xe689;</div> -->
      <div class="content">
        <div class="img-wrapper" v-if="ifShow">
          <!-- <img class="content-img" src="@/assets/images/vuegowhere.png"> -->
          <img class="content-img" :src="contentData.imgsrc">
        </div>
        <div class="text-container">
          <div class="text-item">
            <div class="title">项目名称</div>
            <div class="text">{{contentData.title}}</div>
          </div>
          <div class="text-item">
            <div class="title">项目来源</div>
            <div class="text">{{contentData.from}}</div>
          </div>
          <div class="text-item">
            <div class="title">项目简介</div>
            <div class="text">{{contentData.projectDesc}}</div>
          </div>
          <div class="text-item">
            <div class="title">使用技术</div>
            <div class="text" v-for="item of contentData.usedTech" :key="item">{{item}}</div>
          </div>
          <div class="text-item">
            <div class="title">项目展示</div>
            <div class="text">
              <a :href="contentData.linkto" target="_blank" rel="noopener noreferrer">{{contentData.linkto}}</a>
            </div>
          </div>
          <div class="text-item">
            <div class="title">GitHub地址</div>
            <div class="text">
              <a :href="contentData.github" target="_blank" rel="noopener noreferrer">{{contentData.github}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fixWidth: 600,
      ifShow: true
    }
  },
  beforeMount () {
    const winWidth = window.innerWidth
    if (winWidth <= this.fixWidth) {
      this.ifShow = false
    } else {
      this.ifShow = true
    }
  },
  methods: {
    handleWrapperClick () {
      this.$emit('ProDetChange')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/function.styl'
.wrapper
  width 100%
  height 100%
  position fixed
  background rgba(0, 0, 0, .5)
  top 0
  bottom 0
  left 0
  right 0
  color #5e3c17
  z-index 10
  .close
    line-height px2rem(50)
    font-size px2rem(30)
    text-align center
    width px2rem(50)
    height px2rem(50)
    border-radius 50%
    position absolute
    top px2rem(20)
    right px2rem(20)
    transition transform .5s ease
    background #eba584
    box-sizing border-box
    overflow hidden
    z-index 30
    &:hover
      cursor pointer
      transform rotate(360deg)
  .container
    width 80%
    height 80%
    background #eba584
    position absolute
    // top px2rem(120)
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    border-radius 10px
    overflow-y auto
    overflow-x hidden
    .content
      width 100%
      height 100%
      padding px2rem(10)
      box-sizing border-box
      display flex
      flex-flow nowrap
      .img-wrapper
        min-width 0
        // max-width 50%
        width 560px
        // overflow hidden
        // float left
        .content-img
          width 100%
          // height 100%
          border-radius 10px
      .text-container
        // white-space wrap
        width 100%
        box-sizing border-box
        padding-left px2rem(10)
        // float right
        display flex
        flex-direction column
        color #5e3c17
        // flex-flow wrap
        .text-item
          font-size px2rem(20)
          line-height px2rem(22)
          margin-bottom px2rem(10)
          .title
            font-weight bolder
            margin-bottom px2rem(10)
          .text
            word-wrap break-word
            // text-indent 1em
            padding-left px2rem(20)
            margin-bottom px2rem(10)
            // color red
            a
              color #5e3c17
              &:hover
                color #a16728
                cursor pointer
</style>
