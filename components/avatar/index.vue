<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="avatar-container" @click="handleClickAvatarSubmit">
    <img v-if="isAvatar" class="avatar-img" src="" alt="">
    <!-- <div v-else class="default-avatar">
      <p class="text">请登录</p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    avatarURL: {
      typeof: String,
      default: ''
    }
  },
  computed: {
    isAvatar() {
      if(this.avatarURL != null && this.avatarURL !== '') {
        return true
      }
      return false
    }
  },
  methods: {
    handleClickAvatarSubmit() {
      this.$emit('handleClickAvatarSubmit')
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  .avatar-img {
    width: 100%;
    height: 100%;
  }
  .default-avatar {
    width: 100%;
    height: 100%;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    .text {
      font-size: 12px;
      color: #FFFFFF;
    }
  }
  .admin-name {
    font-size: 16px;
    text-align: center;
    font-weight: 600;
  }
}
</style>