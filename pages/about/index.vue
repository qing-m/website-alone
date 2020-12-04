<template>
  <div>
    <h1>Hello About</h1>
    <router-link to="/home">
      Go Home
    </router-link>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About'
    }
  },
  transitions: 'search-slide'
}
</script>
