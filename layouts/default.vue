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

</style>
