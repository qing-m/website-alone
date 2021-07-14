<template>
  <div class="loginContainer">
    <div>
      <p class="title">登录</p>
      <div class="loginFrom">
        <el-input v-model="nickName" placeholder="请输入邮箱"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button @click="handleClickSubmitFromLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      nickName: '',
      password: ''
    }
  },
  methods: {
    async handleClickSubmitFromLogin() {
      try {
        const requestData = {
          nickName: this.nickName,
          password: this.password
        }
        const response = await this.$store.dispatch('admin/login',requestData)
        console.log(response)
      } catch (error) {
        return error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loginContainer {
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
  }
  .title {
    font-family: Helvetica;
    font-size: 48px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 53px;
    margin-bottom: 30px;
  }
  .loginFrom {
    padding: 0 120px;
    .el-input {
      display: block;
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>