<template>
  <div id="app" class="app-container" data-theme="default">
    <page-header />
    <Nuxt />
  </div>
</template>

<script>
import pageHeader from '@/components/layout/page-header/page-header'
export default {
  components: {
    pageHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
