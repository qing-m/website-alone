<template>
  <div>
    <header class="page-header-container">
      <div class="page-header-inner">
        <nuxt-link class="logo-link-container" to="/home">
          <svg-icon class="icon" icon-class="logo" />
        </nuxt-link>
        <ul role="navigation" class="tabs page-header-tabs">
          <nuxt-link
            v-for="(item,index) in navList"
            :key="index"
            class="tabs-item page-header-tab"
            role="tab"
            tag="li"
            :to="item.href"
          >
            <!-- tabs-link','page-header-tabsLink',{false:" isActive}] -->
            <p :class="{'tabs-link': true, 'page-header-tabsLink': true, 'isActive': item.href === fullPath }">
              {{ item.name }}
            </p>
          </nuxt-link>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    fullPath () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.page-header-container {
  @include background_color('bg-color-primary');
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  background-clip: content-box;
  position: relative;
  z-index: 1000;
  min-width: 1000px;
  overflow: hidden;
  box-sizing: border-box;
  display: block;
  height: 52px;
  .page-header-inner {
    position: relative;
    display: flex;
    align-items: center;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    .logo-link-container {
      @include displayCenter;
      width: 64px;
      height: 34px;
      .icon {
        width: 64px;
        height: 30px;
      }
    }
    .page-header-tabs {
      display: flex;
      flex-shrink: 0;
      margin: 0 16px;
      .page-header-tab {
        padding: 0 14px;
        &.tabs-item {
          display: inline-block;
        }
        .tabs-link {
          position: relative;
          display: inline-block;
          padding: 14px 0;
          line-height: 22px;
          text-align: center;
          cursor: pointer;
          user-select: none;
        }
        .page-header-tabsLink {
          font-size: 15px;
          @include font_color('text-color-primary')
        }
        .isActive {
          @include font_color('hover-color-primary');
          font-weight: 600;
        }
        .isActive::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 3px;
          @include background_color('color-info');
          content: '';
        }
        .page-header-tabsLink:hover,.isActive:hover {
          @include font_color('hover-color-primary');
        }
      }
    }
  }
}
</style>
