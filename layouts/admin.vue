<template>
  <div class="adminComponentContainer">
    <div class="adminCardContainer">
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
  box-sizing: border-box;
  background: url('~@/assets/image/admin/admin-bg.png') no-repeat center center;
  background-size: cover;
}
</style>
