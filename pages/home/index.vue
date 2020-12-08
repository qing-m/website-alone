<template>
  <div class="home-container">
    <i class="icon-cry" />
    <i class="icon-smile" />
    <i class="icon-mimaxianshi" />
    <i class="icon-double-arro-right" />
    <i class="icon-mima_yincang" />
    <p>11111111111111</p>
    <p>2222222222222</p>
    <el-button type="success">
      222222222222222
      {{ title }}
    </el-button>
    <svg-icon class="icon" icon-class="robotAva" />
    <svg-icon class="icon" icon-class="Rockstar" />
    <a href="#">Hellllllllll</a>
    <p>
      前几天很多人在讨论一个消息。

      武汉某大学的一位教授，博士生导师，52岁，三年前患了肺癌。前期治疗，他陆续花了40万，已经倾尽所有。现在他每月光药费就需要4万，实在没钱再治疗了，只好网上求助，希望募得30万元救命钱。

      他这样说到：

      “人生真的很脆弱，一场疾病意外就能将一个人的尊严毁灭。不到万不得已，我也不会恳求大家的帮助……”

      这句话从一个大学博士生导师那里说出来，实在让人唏嘘。

      当人住进医院的时候，钱，是可救命的；没钱的，几乎只能听天由命，这很扎心，却是现实。

      一位90后网友说，他工作后最大的体会是：

      怎么钱那么不经花？

      工资4千多，每月租房就没了2千，经常加班所以午餐、晚餐甚至宵夜都在公司附近解决，没多久他就不得不开始记账。

      被动收入一分钱没有，被动支出却很多。

      对于很多人来说，别说随便辞职了，就算你想今朝有酒今朝醉，也得先摸摸口袋考虑下有没有钱买酒。
    </p>
  </div>
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
  @include container;
  @include font_color('color-info');
  user-select: none;
  -webkit-user-select: none;
}
.icon {
  width: 100px;
  height: 100px;
  color: #FFFFFF;
}
</style>
