<template>
  <div class="about-container">
    <h1>Hello About</h1>
    <router-link to="/home">
      Go Home
    </router-link>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About'
    }
  }
  // transitions: 'search-slide'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
@import '@/assets/scss/animation.scss';
.about-container {
  @include container;
  @include font_color('color-info');
  user-select: none;
  -webkit-user-select: none;
}
</style>
