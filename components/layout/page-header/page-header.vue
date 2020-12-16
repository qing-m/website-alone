<template>
  <div class="page-nav-header">
    <header class="page-header-container">
      <div class="page-header-inner">
        <nuxt-link class="logo-link-container" to="/home" tag="div">
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
            <p :class="{'tabs-link': true, 'page-header-tabsLink': true, 'isActive': item.href === fullPath }">
              {{ item.name }}
            </p>
          </nuxt-link>
        </ul>
        <div :class="['SearchBar','AppHeader-SearchBar',{'AppHeader-Search-isFocus': isInputFocus}]">
          <div class="SearchBar-tool">
            <div class="SearchBar-input Input-wrapper">
              <el-input
                v-model="serchVal"
                suffix-icon="el-icon-search"
                type="text"
                placeholder="有哪些别出心裁的情话"
                maxlength="100"
                @blur="handleBlurVal"
                @focus="handleFocusVal"
              />
            </div>
          </div>
          <el-button class="SearchBar-button" type="primary">
            提问
          </el-button>
        </div>
        <div class="page-header-user-info">
          <img class="Avatar" src="https://pic3.zhimg.com/v2-d23a46def3f2047fb8ce095f649a71e7_is.jpg" alt="">
        </div>
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
  data () {
    return {
      serchVal: '',
      isInputFocus: false
    }
  },
  computed: {
    fullPath () {
      return this.$route.fullPath
    }
  },
  methods: {
    handleBlurVal () {
      this.isInputFocus = false
    },
    handleFocusVal () {
      this.isInputFocus = true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.page-header-container {
  @include background_color('bg-color-primary');
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  background-clip: content-box;
  position: relative;
  z-index: 1000;
  min-width: 1200px;
  overflow: hidden;
  box-sizing: border-box;
  display: block;
  height: 52px;
  .page-header-inner {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1200px;
    height: 52px;
    margin: 0 auto;
    -webkit-box-align: center;
    .logo-link-container {
      @include displayCenter;
      width: 34px;
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
    .AppHeader-SearchBar {
      height: 34px;
      -webkit-box-flex: 1;
      flex-grow: 1;
      position: relative;
      &.SearchBar {
        display: flex;
      }
      &.AppHeader-Search-isFocus {
        .SearchBar-button {
          display: none;
        }
        .SearchBar-tool {
          width: 100%;
          .SearchBar-input {
            transition: width .2s ease, background .3s ease;
            width: 100%;
          }
        }
      }
      .SearchBar-tool {
        height: 100%;
        position: relative;
        overflow: hidden;
        z-index: 104;
        .SearchBar-input {
          flex: 1;
          box-sizing: border-box;
          padding-left: 12px;
          padding-right: 0;
          width: 260px;
          .el-input {
            width: auto;
            position:relative;
            height: 24px;
            line-height: 24px;
            flex: 1 1;
            display: flex;
            .el-input__inner{
              color: #121212 !important;
              height: 24px;
              line-height: 24px;
              padding: 0 5px 0 0;
              overflow: hidden;
              background-color: transparent;
              border: none;
              resize: none;
              font-size: 14px;
              box-sizing: border-box;
              &.el-input_inner::placeholder {
                color: #8590a6;
              }
            }
            .el-input__suffix {
              position: relative;
              color: #8590a6;
              cursor: pointer;
              .el-input__icon {
                line-height: 24px;
              }
            }
          }
          &.Input-wrapper {
            position: relative;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            height: 34px;
            padding: 4px 10px;
            font-size: 14px;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            background-color: #F6F6F6;
          }
        }
      }
      .SearchBar-button {
        margin-left: 16px;
        padding: 0 14px;
        line-height: 30px;
      }
    }
    .page-header-user-info {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      flex: 4;
      text-align: right;
      .Avatar {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
