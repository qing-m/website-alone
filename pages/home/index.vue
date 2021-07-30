<template>
  <div class="homeContainer">
    homeContainer
    <button @click="handleRegister">111111</button>
  </div>
</template>

<script>
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(store.state.admin.token)
  },
  methods: {
    handleRegister() {
      console.log(this.$store.state)
    }
  },
}
</script>