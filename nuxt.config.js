export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '元气肥宅妙妙屋 | Alone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/index.scss'
  ],
  styleResources: {
    scss: [
      './assets/scss/variable.scss',
      './assets/scss/element-variables.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/elementUI'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    port: 8999,
    host: '0.0.0.0'
  },

  router: {
    extendRoutes (routes, reslove) {
      routes.push({
        path: '/',
        redirect: {
          name: 'home'
        }
      })
    }
  },

  // 环境变量
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://www.alone.chat' : 'http://127.0.0.1:8888'
  },

  // 防止打包多次
  vendor: ['element-ui']
}
