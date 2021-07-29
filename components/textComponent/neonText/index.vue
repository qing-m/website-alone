<template>
  <div class="neonTextContainer">
    <p class="neon">
      {{dataText}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    dataText: {
      type: String,
      default: 'HelloWorld'
    }
  }
}
</script>

<style lang="scss">
.neonTextContainer {
  .neon {
    text-transform: uppercase;
    cursor: default;
    color: #FFFFFF;
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.5),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
    // animation: shining 0.5s alternate infinite;
    &:hover {
      cursor: pointer;
      text-shadow: 0 0 6px rgba(182, 211, 207, 1),
        0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(50, 115, 223, 0.6),
        0 0 22px rgba(50, 115, 223, 0.8), 0 0 38px rgba(50, 115, 223, 0.9),
        0 0 60px rgba(50, 115, 223, 1);
    }
  }
}
</style>