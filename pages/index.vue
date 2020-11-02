<template>
  <div class="index-wrapper">
    <revealText reveal-text="你好,欢迎来到我的网站" />
    <anButton conent="Go" />
    <anSelfcard />
  </div>
</template>

<script>
import revealText from '@/components/animate/revealText'
import anButton from '@/components/animate/anButton'
import anSelfcard from '@/components/animate/anSelfcard'
export default {
  name: 'Index',
  components: {
    revealText,
    anButton,
    anSelfcard
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
