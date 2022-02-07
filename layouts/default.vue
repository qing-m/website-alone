<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['userAuth'],
  data () {
    return {
      dataTheme: 'default'
    }
  },
  methods: {
    handleChangeTheme () {
      this.dataTheme === 'default' ? this.dataTheme = 'light' : this.dataTheme = 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
  display: flex;
}
</style>
