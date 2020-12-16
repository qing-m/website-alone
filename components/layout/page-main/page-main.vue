<template>
  <div class="App-main">
    <div class="Topstory">
      <div class="Topstory-container">
        <div class="Topstory-mainColumn">
          <div class="Topstory-mainColumnCard">
            <Nuxt />
          </div>
        </div>
        <div class="GlobalSideBar GlobalSideBar--old">
          <GlobalSideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalSideBar from './GlobalSideBar'
export default {
  name: 'PageMain',
  components: {
    GlobalSideBar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.App-main {
  display: block;
  background-color: #F6F6F6;
  .Topstory-container {
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    .Topstory-mainColumn {
      flex-shrink: 0;
      margin-right: 10px;
      margin-bottom: 0;
      width: 680px;
      .Topstory-mainColumnCard {
        box-shadow: 0 1px 3px rgba(18,18,18,.1);
      }
    }
    .GlobalSideBar {
      -webkit-box-flex: 1;
      flex: 1 1;
      font-size: 14px;
    }
  }
}
</style>
