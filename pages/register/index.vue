<template>
  <div class="adminContainers">
    <div class="fromInputs">
      <label class="inputContainer">
        <i class="icon icon-admin-user beforeIcon"></i>
        <input
          class="inputItem"
          v-model="nickName" 
          placeholder="请输入用户名"
          clearable
          maxlength='20'
          @focus="inputFocus"
          @blur="inputBlur"
        ></input>
      </label>
      <label class="inputContainer">
        <i class="icon icon-admin-youxiang beforeIcon"></i>
        <input
          class="inputItem"
          v-model="email" 
          placeholder="请输入邮箱"
          clearable
          maxlength='20'
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
          @click="handleClickSubmitFromRegister"
        >注册账号</van-button>
        <van-button 
          @click="() => $router.push({name: 'login'})"
          class="admin-btn bottomBtn" 
          block
          color="#0058E4"
          plain
        >登录账号</van-button>
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