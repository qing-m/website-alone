<template>
  <div class="Introduction-wrapper">
    <div class="narrative">
      <anSelfcard />
    </div>
    <div class="anhartbtn">
      <nuxt-link to="/HappyBirthday">
        <anHartbtn content="Click Me" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import anSelfcard from '@/components/animate/anSelfcard'
import anHartbtn from '@/components/animate/anHartbtn'
export default {
  name: 'Introduction',
  components: {
    anSelfcard,
    anHartbtn
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }to {
    opacity: 1;
  }
}
.Introduction-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #333333;
  .narrative {
    padding: 200px 0 0 300px;
  }
  .anhartbtn {
    opacity: 0;
    padding-left: 280px;
    animation: fadeIn 3s 13s forwards;
  }
}
</style>
