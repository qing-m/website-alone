<template>
  <div class="nabar">
    <div class="navbar-wrapper">
      <span>Hello</span>
      <span>Home</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
.nabar {
  background-color: orchid;
}
.navbar-wrapper {
  height: 60px;
  line-height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #aeb3b8;
}
</style>
