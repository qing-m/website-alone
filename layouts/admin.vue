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

</script>

<style lang="scss" scoped>
.adminComponentContainer {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: #FFFFFF;
  .ikonContainer {
    width: 100%;
    height: 752px;
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
      width: 270px;
      height: 270px;
      top: -80px;
      left: -100px;
    }
    .adorn-two {
      width: 240px;
      height: 240px;
      top: 63px;
      right: -175px;
    }
    .adorn-three {
      width: 138px;
      height: 138px;
      bottom: 99px;
      left: 164px;
    }
    img {
      width: 439px;
      height: 390px;
    }
  }
}
</style>
