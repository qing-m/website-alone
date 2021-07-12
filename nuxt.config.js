import path from 'path'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '元气肥宅妙妙屋 | Alone',
    titleTemplate: '%s | Alone',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: '前端，JavaScript，博客，Node，Vue' },
      { name: 'author', content: 'admin@Alone' },
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
  dev: process.env.NODE_ENV !== 'production',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/elementUI',
    { src: '@/plugins/icons', ssr: true }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
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
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]
      // Includes /icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  },

  server: {
    port: 8999,
    host: '0.0.0.0'
  },

  router: {
    middleware: 'theme',
    extendRoutes (routes, reslove) {
      routes.push({
        path: '/',
        redirect: {
          name: 'register'
        }
      })
    }
  },

  // 环境变量
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://www.alone.chat' : 'http://127.0.0.1:8999'
  },

  // 防止打包多次
  vendor: ['element-ui']
}
