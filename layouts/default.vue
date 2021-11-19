<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/navBar'
export default {
  components: {
    NavBar
  },
  data () {
    return {
      dataTheme: 'default'
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
.app-container {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  position: relative;
  overflow: hidden;
}
</style>
