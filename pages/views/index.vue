<template>
  <div class="views-container">
    <div class="document-html-file">
      <div class="layout">
        <div class="page">
          <div class="events">
            <p>asyncData</p>
            <p>fetch</p>
            <p>head</p>
            <p>layout</p>
            <p>middleware</p>
            <p>scrollToTop</p>
            <p>transition</p>
            <p>validate</p>
          </div>
          <div>
            <div class="page-child" />
            <div class="optioal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    // 请求数据
    // await getUserInfo()
  },
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {

  },
  head () {
    return {
      title: 'Views'
    }
  },
  layout: 'main',
  middleware: '',
  scrollToTop: '',
  transitions: '',
  validate: ''
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/_themes.scss';
@import '@/assets/scss/_handle.scss';
.views-container {
  @include container;
  .document-html-file {
    width: 100%;
    background-color: #00c58e;
  }
  .events {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
  }
}
</style>
