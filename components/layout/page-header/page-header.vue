<template>
  <div class="page-header-container">
    <div class="page-header-content-nav">
      <p>11111111111</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.page-header-container {
  background-color: seagreen;
  height: 60px;
  box-sizing: border-box;
  .page-header-content-nav {
    @include container;
    height: 100%;
    background-color: sandybrown;
  }
}
</style>
