<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="homeContainer">
    联系人列表
  </div>
</template>

<script>
export default {
  layout: 'default',
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(store.state.admin.userId)
  },
  head: {
    title: '琦玉'
  },
  methods: {
    handleRegister() {
      console.log(this.$store.state)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>