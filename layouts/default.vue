<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <page-header />
    <Nuxt />
    <button @click="handleChangeTheme">
      Change Theme
    </button>
  </div>
</template>

<script>
import pageHeader from '@/components/layout/page-header/page-header'
export default {
  components: {
    pageHeader
  },
  data () {
    return {
      dataTheme: 'light'
    }
  },
  methods: {
    handleChangeTheme () {
      this.dataTheme === 'default' ? this.dataTheme = 'light' : this.dataTheme = 'default'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
