<template>
  <div class="GlobalSideBar-container">
    <div class="Sticky">
      <div class="Card">
        <GlobalWrite />
      </div>
      <div class="Card">
        <CreatorEntrance />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalWrite from './GlobalWrite'
import CreatorEntrance from './CreatorEntrance'
export default {
  components: {
    GlobalWrite,
    CreatorEntrance
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
@import '@/assets/scss/animation.scss';
.Sticky {
  display: block;
}
.Card {
  margin-bottom: 10px;
  background-color: #FFFFFF;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-sizing: border-box;
}
</style>
