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
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0E0E0E;
  .adminCardContainer {
    width: 200px;
    height: 65%;
    border-radius: 10px;
    background: #FEF900;
  }
}
</style>
