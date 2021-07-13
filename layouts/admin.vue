<template>
  <div class="adminComponentContainer">
    <div class="adminCardContainer">
      <Nuxt />
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.adminComponentContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0E0E0E;
  .adminCardContainer {
    width: 480px;
    height: 430px;
    box-shadow: 10px 10px #FFFFFF;
    border: 1px solid #FFFFFF;
  }
}
</style>
