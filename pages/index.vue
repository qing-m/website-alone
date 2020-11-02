<template>
  <div class="index-wrapper">
    <revealText reveal-text="你好,欢迎来到我的网站" />
  </div>
</template>

<script>
import revealText from '@/components/animate/revealText'
export default {
  name: 'Index',
  components: {
    revealText
  }
}
</script>

<style lang="scss" scoped>
.index-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #333333;
}
</style>
