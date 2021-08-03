<template>
  <div class="defaultNavBar">
    <div class="container">
      <div class="user-avatar-name">
        <img src="https://outin-ede8be7da1c311ebbe1400163e1c35d5.oss-cn-shanghai.aliyuncs.com/image/default/C0D3C14D40EA4C23A005032E0E5E3887-6-2.png">
        <p>Alone</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.defaultNavBar {
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  background-image: linear-gradient(90deg,#51CBFC, #47A7FE);
  position: relative;
  padding: 0 16px;
  user-select: none;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .user-avatar-name {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      p {
        font-size: 16px;
        color: #FFFFFF;
      }
    }
  }
}
</style>