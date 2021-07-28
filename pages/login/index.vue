<template>
  <div class="adminContainers">
    <div class="fromInputs">
      <van-field
        v-model="email" 
        placeholder="请输入邮箱"
        prefix-icon="el-icon-message"
        clearable
      ></van-field>
      <van-field 
        v-model="password" 
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        clearable
        type="password"
      ></van-field>
      <div class="submitContainers">
        <van-button type="info" @click="handleClickSubmitFromLogin">登录账号</van-button>
        <van-button plain type="default" @click="() => $router.push({name: 'register'})">注册账号</van-button>
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
    async handleClickSubmitFromLogin() {
      try {
        const requestData = {
          email: this.email,
          password: this.password
        }
        const response = await this.$store.dispatch('admin/login',requestData)
        console.log(response)
        this.$router.push({name: 'home'})
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
    .submitContainers {
      margin-top: 70px;
      /deep/.van-button {
        display: block;
        margin: 0;
        &.van-button--info {
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
        &.van-button--default { 
          width: 100%;
          height: 80px;
          border-radius: 40px;
          font-size: 26px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          line-height: 15px;
          color: #333333;
        }
      }
      /deep/.van-button:first-child {
        margin-bottom: 28px;
      }
    }
  }
}
</style>