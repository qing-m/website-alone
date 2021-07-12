<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <Nuxt />
  </div>
</template>

<script>
export default {
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
  background-color: #f6f6f6;
  position: relative;
}
</style>
