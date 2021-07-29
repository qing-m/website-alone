<template>
  <div class="adminContainers">
    <div class="fromInputs">
      <van-field
        v-model="nickName" 
        placeholder="请输入用户名"
        clearable
      ></van-field>
      <van-field  
        v-model="email" 
        placeholder="请输入邮箱"
        clearable
      ></van-field>
      <van-field
        v-model="password" 
        placeholder="请输入密码"
        clearable
        type="password"
      ></van-field>
      <div class="submitContainers">
        <van-button type="info" @click="handleClickSubmitFromRegister">注册账号</van-button>
        <van-button plain type="default" @click="() => $router.push({name: 'login'})">登录账号</van-button>
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
        this.$notify({
          message: '注册成功',
          type: 'success'
        });
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
    padding: 0 46px;
    .submitContainers {
      margin-top: 35px;
      /deep/.van-button {
        display: block;
        margin: 0;
        &.van-button--info {
          width: 100%;
          height: 40px;
          background: linear-gradient(90deg, #0058E4 0%, #008BFF 100%);
          border-radius: 20px;
          font-size: 13px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          line-height: 8px;
          color: #FFFFFF;
        }
        &.van-button--default { 
          width: 100%;
          height: 40px;
          border-radius: 20px;
          font-size: 13px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          line-height: 8px;
          color: #333333;
        }
      }
      /deep/.van-button:first-child {
        margin-bottom: 14px;
      }
    }
  }
}
</style>