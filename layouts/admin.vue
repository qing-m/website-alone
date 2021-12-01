<!--
 * @Author: your name
 * @Date: 2021-07-13 11:43:17
 * @LastEditTime: 2021-12-01 17:17:29
 * @LastEditors: 王鹤垚
 * @Description: In User Settings Edit
 * @FilePath: \website-alone\layouts\admin.vue
-->
<template>
  <div class="adminComponentContainer">
    <h3 class="title">{{routerName}}</h3>
    <div class="adminCardContainer">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routerName() {
      const name = {
        register: 'Sign Up',
        login: 'Sign In'
      }
      return name[this.$route.name]
    }
  }
}
</script>

<style lang="scss" scoped>
.adminComponentContainer {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background: #FFFFFF;
  padding-top: 156px;
  .title {
    font-size: 56px;
    text-align: center;
    color: #333333;
  }
  .adminCardContainer {
    box-sizing: border-box;
    width: 100%;
    padding: 0 92px;
    margin-top: 200px;
  }
}
</style>

<style lang="scss">
.fromInputs {
  .inputContainer {
    position: relative;
    display: flex;
    align-items: center;
    .beforeIcon {
      font-size: 33px;
      position: absolute;
      left: 35px;
    }
    .inputItem {
      width: 100%;
      height: 86px;
      box-sizing: border-box;
      border-bottom: 1px solid #DDDDDD;
      border-radius: 0;
      padding: 35px 105px;
      font-size: 26px;
      font-weight: normal;
      color: #333333;
      line-height: 15px;
    }
    .inputItem:focus {
      color: #0058E4;
      border-color: #0058E4;
    }
  }
  .currentFocusContainer {
    .beforeIcon {
      color: #0058E4;
    }
  }
}
</style>
