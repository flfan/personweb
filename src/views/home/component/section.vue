<template>
  <div :class="['section', {fixwidth: fixWidthClass}]">
    <div class="container">
      <common-item :iteminfo="item" :index="index" v-for="(item, index) in itemsinfos" :key="item.title"/>
    </div>
  </div>
</template>

<script>
// import SectionItem from './section-item'
import CommonItem from '@/component/item'
export default {
  name: 'HomeSection',
  components: {
    // SectionItem,
    CommonItem
  },
  data () {
    return {
      fixWidth: 1753,
      fixWidthClass: true,
      itemsinfos: [
        {
          imgsrc: require('../../../../src/assets/images/home-9.jpg'),
          title: '我的项目',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/project'
        },
        {
          imgsrc: require('../../../../src/assets/images/home-6.jpg'),
          title: '我的简历',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/resume'
        },
        {
          imgsrc: require('../../../../src/assets/images/home-10.jpg'),
          title: '我的兴趣',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/project'
        },
        {
          imgsrc: require('../../../../src/assets/images/home-5.jpg'),
          title: '其他',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/project'
        }
      ]
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
.fixwidth
  position absolute
  top 180px
  left 0
  right 0
  margin 0 auto
.section
  padding 20px 0
  width 80%
  margin auto
  // background #dbae8d
  .container
    width 100%
    height 100%
    display flex
    flex-flow wrap
    justify-content space-around
    font-size px2rem(25)
</style>
