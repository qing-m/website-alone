<!--
 * @Author: your name
 * @Date: 2021-07-13 11:43:17
 * @LastEditTime: 2021-08-17 15:17:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \website-alone\layouts\admin.vue
-->
<template>
  <div class="adminComponentContainer">
    <div class="adminCardContainer">
      <div class="ikonContainer">
        <img src="~/assets/image/admin/admin-ikon.png" alt="">
        <div class="adorn adorn-one"></div>
        <div class="adorn adorn-two"></div>
        <div class="adorn adorn-three"></div>
      </div>
      <div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.adminComponentContainer {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: #FFFFFF;
  .ikonContainer {
    width: 100%;
    height: 376px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .adorn {
      position: absolute;
      background: #E5F7FF;
      border-radius: 50%;
    }
    .adorn-one {
      width: 135px;
      height: 135px;
      top: -40px;
      left: -50px;
    }
    .adorn-two {
      width: 120px;
      height: 120px;
      top: 32px;
      right: -88px;
    }
    .adorn-three {
      width: 69px;
      height: 69px;
      bottom: 50px;
      left: 82px;
    }
    img {
      width: 220px;
      height: 195px;
    }
  }
}
</style>
