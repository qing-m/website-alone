<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="navbar-container">
    <Avatar
      :avatarURL="this.avatar"
      @handleClickAvatarSubmit='handleClickAvatarSubmit'
    />
  </div>
</template>

<script>
import Avatar from '@/components/avatar/index.vue'
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      avatar: ''
    }
  },
  methods: {
    handleClickAvatarSubmit() {
      console.log('点击头像')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 88px;
  height: 100%;
  background: #2e2e2e;
  display: inline-block;
  padding: 10px 0 10px 0;
}
</style>