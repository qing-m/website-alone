<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <defaultNavBar/>
    <Nuxt />
  </div>
</template>

<script>
import defaultNavBar from '@/components/defaultNavBar'
export default {
  components: {
    defaultNavBar
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
  background-color: #FFFFFF;
  position: relative;
}
</style>
