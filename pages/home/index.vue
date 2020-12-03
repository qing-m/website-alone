<template>
  <div class="home-wrapper">
    <el-button type="success">
      222222222222222
      {{ title }}
    </el-button>
    <i class="icon icon-cry" />
    <i class="icon icon-smile" />
    <i class="icon icon-mimaxianshi" />
    <i class="icon icon-double-arro-right" />
    <i class="icon icon-mima_yincang" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async fetch () {
    // 请求数据
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

</style>
