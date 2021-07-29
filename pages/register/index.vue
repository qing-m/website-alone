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
        <van-button class="topBtn" type="info" @click="handleClickSubmitFromRegister">注册账号</van-button>
        <p class="bottomBtn" @click="() => $router.push({name: 'login'})">登录账号</p>
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
      border-bottom: 1px solid #DDDDDD;
      .beforeIcon {
        font-size: 18px;
        position: absolute;
        left: 14px;
      }
      .inputItem {
        width: 100%;
        height: 43px;
        box-sizing: border-box;
        padding: 18px 47px;
        font-size: 13px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #333333;
        line-height: 8px;
      }
    }
    .currentFocusContainer {
      border-bottom: 1px solid #0058E4;
      .beforeIcon {
        color: #0058E4;
      }
    }
    .submitContainers {
      margin-top: 35px;
      padding: 0 31px;
      /deep/.van-button {
        display: block;
        margin: 0;
        &.topBtn{
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