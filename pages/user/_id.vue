<template>
  <div>
    {{ defaultRouter }}
    {{ $route.params.id }}
    {{ 1111111111111111 }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  asyncData ({ content }) {
    return {
      router: process.env.baseUrl
    }
  },
  data () {
    return {
      router: 'default',
      defaultRouter: this.$route.params.id
    }
  }
}
</script>
