<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <page-header :nav-list="navList" />
    <Nuxt />
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
      navList: [
        {
          name: '首页',
          href: '/home'
        },
        {
          name: '留言墙',
          href: '/message'
        },
        {
          name: '聊天室',
          href: '/chat'
        }
      ],
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
