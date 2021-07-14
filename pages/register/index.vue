<template>
  <div class="registerContainer">
    <div>
      <p class="title">注册</p>
      <div class="registerFrom">
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button @click="handleClickSubmitFromRegister">注册</el-button>
      </div>
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
        this.$router.push({name: 'login'})
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
  .registerFrom {
    padding: 0 120px;
    .el-input {
      display: block;
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>