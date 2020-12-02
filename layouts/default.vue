<template>
  <div class="layout-wrapper">
    <navBar />
    <div class="main-wrapper">
      <Nuxt />
    </div>
    <div class="footer-wrapper">
      2
    </div>
  </div>
</template>

<script>
import navBar from './navBar/index'
export default {
  components: {
    navBar
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  .footer-wrapper {
    width: 100%;
    height: 38px;
    background-color: rgb(138, 135, 134);
  }
}
</style>
