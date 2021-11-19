<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="homeContainer">

  </div>
</template>

<script>
export default {
  layout: 'default',
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(store.state.admin.token)
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
.homeContainer {
  width: 100%;
  height: 100%;
  background: #F6F6F6;
}
</style>