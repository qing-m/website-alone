<template>
  <div class="page-main-container">
    <div class="">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMain'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.page-main-container {
  display: block;
  background-color: #F6F6F6;
}
</style>
