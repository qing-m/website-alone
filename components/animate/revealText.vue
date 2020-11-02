<template>
  <div class="reveal-component">
    <div class="reveal">
      {{ revealText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevealText',
  props: {
    revealText: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>

<style lang="scss" scoped>
.reveal-component {
  width: 100%;
  height: 100%;
  .reveal {
    color: #FFFFFF;
  }
}
</style>
