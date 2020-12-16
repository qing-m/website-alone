<template>
  <div id="app" class="app-container" :data-theme="dataTheme">
    <page-header :nav-list="navList" />
    <page-main>
      <Nuxt />
    </page-main>
    <button @click="handleChangeTheme">
      Change Theme
    </button>
  </div>
</template>

<script>
import pageHeader from '@/components/layout/page-header/page-header'
import pageMain from '@/components/layout/page-main/page-main'
export default {
  components: {
    pageHeader,
    pageMain
  },
  data () {
    return {
      navList: [
        {
          name: '首页',
          href: '/home'
        },
        {
          name: '沸点',
          href: '/recommended'
        },
        {
          name: '等你来答',
          href: '/waiting'
        },
        {
          name: '留言墙',
          href: '/message'
        },
        {
          name: '聊天室',
          href: '/workbench'
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
