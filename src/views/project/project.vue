<template>
  <div :class="['section', {fixwidth: fixWidthClass}]">
    <div class="container">
      <project-item
      :iteminfo="item"
      :index="index"
      v-for="(item, index) in itemsinfos"
      :key="item.title"
      @proItemChange="handleproItemChange"/>
    </div>
    <transition name="fade">
        <div class="clickShow" v-show="isshow">
          <project-detail
          @ProDetChange="HandleProDetChange"
          :contentData="nowItemInfo"/>
        </div>
    </transition>
  </div>
</template>

<script>
import ProjectItem from './component/project-item'
// import CommonItem from '@/component/item'
import ProjectDetail from '../detail/project-detail/project-detail'
export default {
  name: 'HomeProject',
  components: {
    ProjectItem,
    ProjectDetail
    // CommonItem
  },
  data () {
    return {
      fixWidth: 1753,
      fixWidthClass: true,
      isshow: false,
      itemsinfos: [
        {
          // imgsrc: require('../../../src/assets/images/pro-1.jpg'),
          imgsrc: require('../../../src/assets/images/vuegowhere.jpg'),
          title: 'vue仿去哪儿网webApp',
          description: '慕课网课程的项目',
          linkto: 'http://www.zerobreeze.ink/vuegowhere',
          github: 'https://github.com/flfan/gowhere',
          from: '慕课网',
          projectDesc: '用vue仿照去哪儿网的webapp开发的简单应用',
          usedTech: [
            'vue vue-router vuex',
            'webpack git eslint',
            'awesome-swiper better-scroll'
          ]
        },
        {
          imgsrc: require('../../../src/assets/images/todolist.jpg'),
          title: 'vueTodoList应用',
          description: '慕课网课程的项目',
          linkto: 'http://www.zerobreeze.ink/vuetodo',
          github: 'https://github.com/flfan/webpack-vue-todo',
          from: '慕课网',
          projectDesc: '用webpack从零开始手动配置的vue应用',
          usedTech: [
            'vue vue-router vuex',
            'webpack git eslint'
          ]
        },
        {
          imgsrc: require('../../../src/assets/images/myweb2.jpg'),
          title: '我的网站',
          description: '独立项目',
          linkto: 'http://www.zerobreeze.ink',
          github: 'https://github.com/flfan/personweb',
          from: '自己的项目',
          projectDesc: '用vue开发的个人网站，使用vue-router路由。',
          usedTech: [
            'vue vue-router vuex',
            'webpack git eslint'
          ]
        }
        // {
        //   imgsrc: require('../../../src/assets/images/pro-4.jpg'),
        //   title: '其他',
        //   description: '在学习过程中做的项目与自己独立完成的项目',
        //   linkto: 'http://www.zerobreeze.ink',
        //   github: 'http://www.github.com',
        //   from: '慕课网',
        //   projectDesc: '用vue仿照去哪儿网的webapp开发的简单应用',
        //   usedTech: [
        //     'vue vue-router vuex',
        //     'webpack git eslint',
        //     'awsome-swiper better-scroll'
        //   ]
        // }
      ],
      nowItemInfo: {}
    }
  },
  beforeMount () {
    const winWidth = window.innerWidth
    if (winWidth >= this.fixWidth) {
      this.fixWidthClass = true
    } else {
      this.fixWidthClass = false
    }
  },
  methods: {
    HandleProDetChange () {
      if (this.isshow) {
        this.isshow = false
      }
    },
    handleproItemChange (info) {
      this.nowItemInfo = info
      // console.log(this.nowItemInfo)
      if (!this.isshow) {
        this.isshow = true
      }
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
