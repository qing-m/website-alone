<template>
  <div class="page-header-container">
    <div class="page-header-content-nav">
      <div class="logo-container">
        <svg-icon class="icon" icon-class="Rockstar" />
      </div>
      <ul class="nav-bar-container">
        <nuxt-link to="/home" tag="li">
          Home
        </nuxt-link>
        <nuxt-link to="/about" tag="li">
          About
        </nuxt-link>
      </ul>
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
  background-color: rgb(255, 255, 255);
  height: 60px;
  box-sizing: border-box;
  .page-header-content-nav {
    @include container;
    height: 100%;
    position: relative;
    display: -webkit-box;
    display: flex;
    align-items: center;
    background-color: rgb(255, 255, 255);
    .logo-container {
      width: 60px;
      height: 30px;
      margin-right: 20px;
    }
    .nav-bar-container {
      display: flex;
      align-items: center;
      li {
        cursor: pointer;
        user-select: none;
        margin-right: 10px;
        color: rgba(245, 222, 96, 0.89);
      }
      li:hover {
        color: rgb(248, 173, 10);
      }
    }
  }
}
</style>
