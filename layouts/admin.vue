<template>
  <div class="adminComponentContainer">
    <div class="adminNavContainer">
      <nuxt-link to="/register">
        <NeonText data-text='REGISTER' />
      </nuxt-link>
      <nuxt-link to="/login">
        <NeonText data-text='LOGIN' />
      </nuxt-link>
    </div>
    <div class="adminCardContainer">
      <div class="cardLeft">
        <img src="~@/assets/image/admin/admin-bg.png" alt="">
      </div>
      <div class="cardRight">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import NeonText from '@/components/textComponent/neonText'
export default {
  components: {
    NeonText
  },
}
</script>

<style lang="scss" scoped>
.adminComponentContainer {
  width: 100%;
  height: 100vh;
  background: #000000;
  padding: 30px;
  box-sizing: border-box;
  .adminNavContainer {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /deep/.neonTextContainer {
      margin-right: 20px;
      .neon {
        font-size: 60px !important;
      }
    }
  }
  .adminCardContainer {
    width: 1160px;
    margin: 0 auto;
    height: calc(100% - 120px);
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 20px #FFFFFF;
    display: flex;
    .cardLeft {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .cardRight {
      width: 50%;
    }
  }
}
</style>
