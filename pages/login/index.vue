<!--
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
-->
<template>
  <div class="adminContainers">
    <div class="fromInputs">
      <label class="inputContainer">
        <i class="icon icon-admin-youxiang beforeIcon"></i>
        <input
          class="inputItem"
          v-model="email" 
          placeholder="请输入邮箱"
          prefix-icon="el-icon-message"
          clearable
          maxlength='30'
          @focus="inputFocus"
          @blur="inputBlur"
        ></input>
      </label>
      <label class="inputContainer">
        <i class="icon icon-admin-pasd beforeIcon"></i>
        <input
          class="inputItem"
          v-model="password" 
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          clearable
          maxlength='20'
          type="password"
          @focus="inputFocus"
          @blur="inputBlur"
        ></input>
      </label>
      <div class="submitContainers">
        <van-button 
          class="admin-btn topBtn"
          color="linear-gradient(to right, #0058E4, #008BFF)"
          block 
          @click="handleClickSubmitFromLogin"
        >登录账号</van-button>
        <van-button 
          class="admin-btn bottomBtn" 
          block
          color="#0058E4"
          plain
          @click="() => $router.push({name: 'register'})"
        >注册账号</van-button>
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
        await this.$store.dispatch('admin/login',requestData)
        this.$notify({
          message: '登陆成功',
          type: 'success'
        });
        this.$router.push({name: 'home'})
      } catch (error) {
        return error
      }
    },
    inputFocus(e) {
      e.target.parentNode.classList.add('currentFocusContainer')
    },
    inputBlur(e) {
      e.target.parentNode.classList.remove('currentFocusContainer')
    }
  }
}
</script>

<style lang="scss" scoped>
.submitContainers {
  margin-top: 102px;
  /deep/.admin-btn {
    margin-bottom: 28px;
    height: 80px;
    font-size: 28px;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 15px;
  }
}
</style>