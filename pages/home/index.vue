<!--
 * @Author: your name
 * @Date: 2021-05-26 11:34:02
 * @LastEditTime: 2021-07-09 13:50:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \website-alone\pages\home\index.vue
-->
<template>
  <div>
    <div class="home-container" />
    <button @click="handleClickIncrement">+</button>
    {{todoIndex}}
  </div>
</template>

<script>
// import { getUserInfo } from '@/services/api/home'
 import { mapMutations } from 'vuex'
export default {
  name: 'HomePage',
  transition: 'search-slide',
  middleware: 'theme',
  async fetch () {
    // 请求数据
    // await getUserInfo()
  },
  data () {
    return {
      title: 'HomeData'
    }
  },
  head () {
    return {
      title: 'Home'
    }
  },
  computed: {
    todoIndex() {
      return this.$store.state.todos.todoIndex
    }
  },
  methods: {
    ...mapMutations('todo',['setStateTodoIndex']),
    async handleClickIncrement() {
      try {
        const response = await this.$store.dispatch('todos/register',{email:'129221582@qq.com',password: 'a123456'})
        this.$message({
          message: response['msg'],
          type: 'success'
        })
      } catch (error) {
        return error
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
@import '@/assets/scss/animation.scss';
.home-container {
  background-color: #FFFFFF;
  .Topstory-noMarginCard {
    margin-bottom: 0 !important;
    .Topstory-tabs {
      border-bottom: 1px solid #f0f2f7;
      &.TopstoryTabs {
        height: 58px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .TopstoryTabs-link {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          font-size: 16px;
          margin: 0 22px;
          cursor: pointer;
          &.is-active {
            font-weight: 500;
            color: #0084ff;
          }
        }
      }
    }
  }
  #TopstoryContent {
    .ListShortcut {
      .Topstory-mainColumnCard .Card:not(.Topstory-tabCard) {
        margin-bottom: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-bottom: 1px solid #f0f2f7;
      }
      .TopstoryItem-isRecommend {
          padding: 20px;
      }
      .TopstoryItem {
        border-radius: 0;
        overflow: visible;
        overflow: initial;
        position: relative;
        padding: 16px 20px;
      }
    }
  }
}
.Card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
