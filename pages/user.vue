<template>
  <div>
    <h1>1111111111111111111111</h1>
    {{ defaultRouter }}
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      router: 'default',
      defaultRouter: this.$route.name
    }
  }
}
</script>
