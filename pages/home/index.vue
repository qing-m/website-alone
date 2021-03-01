<template>
  <div class="home-container" />
</template>

<script>
// import { getUserInfo } from '@/services/api/home'
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
