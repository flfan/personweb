<template>
  <div :class="['section', {fixwidth: fixWidthClass}]">
    <div class="container">
      <common-item :iteminfo="item" :index="index" v-for="(item, index) in itemsinfos" :key="item.title"/>
    </div>
  </div>
</template>

<script>
// import ProjectItem from './component/project-item'
import CommonItem from '@/component/item'
export default {
  name: 'HomeSection',
  components: {
    // ProjectItem,
    CommonItem
  },
  data () {
    return {
      fixWidth: 1753,
      fixWidthClass: true,
      itemsinfos: [
        {
          imgsrc: require('../../../src/assets/images/pro-1.jpg'),
          title: 'vue仿去哪儿网webApp',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home'
        },
        {
          imgsrc: require('../../../src/assets/images/pro-2.jpg'),
          title: 'webpack配置vueTodoList应用',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/project'
        },
        {
          imgsrc: require('../../../src/assets/images/pro-3.jpg'),
          title: '我的网站',
          description: '在学习过程中做的项目与自己独立完成的项目',
          linkto: '/home/project'
        },
        {
          imgsrc: require('../../../src/assets/images/pro-4.jpg'),
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
