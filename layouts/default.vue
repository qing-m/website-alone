<template>
  <div class="layout-wrapper">
    <navBar />
    <div class="main-wrapper">
      <Nuxt />
    </div>
    <footerBar />
  </div>
</template>

<script>
import navBar from './navBar/index'
import footerBar from './footer/index'
export default {
  components: {
    navBar,
    footerBar
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  background-color: #FFFFFF;
  .main-wrapper {
    width: 100%;
    height: calc(100vh - 76px);
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }
}
</style>
