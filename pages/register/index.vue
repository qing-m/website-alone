<template>
  <div class="adminContainers">
    <div class="fromInputs">
      <el-input 
        v-model="nickName" 
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        clearable
      ></el-input>
      <el-input 
        v-model="email" 
        placeholder="请输入邮箱"
        prefix-icon="el-icon-message"
        clearable
      ></el-input>
      <el-input 
        v-model="password" 
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        clearable
        type="password"
      ></el-input>
      <div class="submitContainers">
        <el-button type="primary" @click="handleClickSubmitFromRegister">注册账号</el-button>
        <el-button type="text" @click="() => $router.push({name: 'login'})">登录账号</el-button>
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
      email: '',
      password: ''
    }
  },
  methods: {
    async handleClickSubmitFromRegister() {
      try {
        const requestData = {
          nickName: this.nickName,
          email: this.email,
          password: this.password
        }
        const response = await this.$store.dispatch('admin/register',requestData)
        alert('注册成功')
        this.$router.push({name: 'login'})
      } catch (error) {
        return error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.adminContainers {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
  .fromInputs {
    padding: 0 92px;
    /deep/.el-input {
      margin-bottom: 35px;
      .el-input__inner {
        padding: 31px 95px 31px 90px;
        font-size: 26px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #333333;
        line-height: 15px;
        border: none;
        border-bottom: 1px solid #DDDDDD;
      }
      .el-input__prefix, .el-input__suffix {
        width: 33px;
        height: 100%;
        padding: 5px 0;
        margin-left: 27px;
        .el-input__icon {
          display: inline;
          font-size: 33px;
          color: #717171;
        }
      }
      .el-input__suffix {
        margin-left: 0;
        margin-right: 27px;
      }
      .el-input__inner:focus {
        border-bottom: 1px solid #0058E4;
        color: #0058E4;
      }
      .el-input__inner:focus+.el-input__prefix {
        .el-input__icon {
          color: #0058E4;
        }
      }
    }
    .submitContainers {
      margin-top: 70px;
      /deep/.el-button {
        display: block;
        margin: 0;
        &.el-button--primary {
          width: 100%;
          height: 80px;
          background: linear-gradient(90deg, #0058E4 0%, #008BFF 100%);
          border-radius: 40px;
          font-size: 26px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          line-height: 15px;
          color: #FFFFFF;
        }
        &.el-button--text {
          width: 100%;
          text-align: center;
          font-size: 26px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          color: #0058E4;
          line-height: 15px;
        }
      }
      /deep/.el-button:first-child {
        margin-bottom: 28px;
      }
    }
  }
}
</style>