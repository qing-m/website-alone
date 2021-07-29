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
          prefix-icon="el-icon-lock"
          clearable
          maxlength='20'
          type="password"
          @focus="inputFocus"
          @blur="inputBlur"
        ></input>
      </label>
      <div class="submitContainers">
        <van-button type="info" @click="handleClickSubmitFromLogin">登录账号</van-button>
        <p class="bottomBtn" @click="() => $router.push({name: 'register'})">注册账号</p>
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
.adminContainers {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
  .fromInputs {
    padding: 0 46px;
    .inputContainer {
      position: relative;
      display: flex;
      align-items: center;
      .beforeIcon {
        font-size: 18px;
        position: absolute;
        left: 14px;
      }
      .inputItem {
        width: 100%;
        height: 43px;
        box-sizing: border-box;
        border-bottom: 1px solid #DDDDDD;
        padding: 18px 47px;
        font-size: 13px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #333333;
        line-height: 8px;
      }
      .inputItem:focus {
        color: #0058E4;
        border-color: #0058E4;
      }
    }
    .currentFocusContainer {
      .beforeIcon {
        color: #0058E4;
      }
    }
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
      }
      .bottomBtn { 
        width: 100%;
        height: 40px;
        font-size: 13px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        line-height: 8px;
        color: #333333;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /deep/.van-button:first-child {
        margin-bottom: 14px;
      }
    }
  }
}
</style>