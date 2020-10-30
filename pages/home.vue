<template>
  <div>
    <h1>Layout,Home</h1>
    <!-- {{ list }} -->
    <nuxt-link to="/home">
      home
    </nuxt-link>
    <nuxt-link to="/home/about">
      about
    </nuxt-link>
    <nuxt-link to="/home/user">
      user
    </nuxt-link>
    <transition name="test">
      <nuxt-child />
    </transition>
  </div>
</template>

<script>
// export default {
//   name: 'Home',
//   async asyncData (context) {
//     const data = await context.app.$axios.get('/home')
//     return {
//       list: data
//     }
//   },
//   data () {
//     return {
//       list: []
//     }
//   }
// }
</script>
