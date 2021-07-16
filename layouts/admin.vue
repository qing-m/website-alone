<template>
  <div class="adminComponentContainer">
    <div class="adminCardContainer">
      <div class="ikonContainer">
        <img src="~/assets/image/admin/admin-ikon.png" alt="">
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
  box-sizing: border-box;
  background: #F3F1FE;
  .ikonContainer {
    width: 100%;
    height: 789px;
    background: #F3F1FE;
    img {
      width: 557px;
      height: 557px;
    }
  }
}
</style>
