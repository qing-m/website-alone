<template>
  <div class="registerContainer">
    <p class="title">注册</p>
    <div class="registerFrom">
      <el-input v-model="email" placeholder="请输入邮箱"></el-input>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
      <el-button @click="handleClickSubmitFromRegister">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleClickSubmitFromRegister() {
      try {
        const requestData = {
          email: this.email,
          password: this.password
        }
        const response = await this.$store.dispatch('admin/register',requestData)
        alert(response.msg)
      } catch (error) {
        return error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.registerContainer {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  .title {
    font-family: Helvetica;
    text-align: center;
    font-size: 36px;
    color: #ffffff;
    padding: 10px 0;
  }
  .registerFrom {
    text-align: center;
    margin-top: 50px;
    .el-input {
      border: none;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #0E0E0E;
      margin-bottom: 8px;
    }
    
  }
}
</style>