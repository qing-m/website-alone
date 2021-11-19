<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="navbar-container">
    <Avatar :avatarURL="this.avatar" />
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
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 88px;
  height: 100%;
  background: #fcee09;
  display: inline-block;
  padding: 10px 0 10px 0;
}
</style>