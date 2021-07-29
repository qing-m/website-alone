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
    '~/plugins/vantUI',
    {src: '@/plugins/nprogress', ssr: false},
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
    postcss: {
      // 添加插件名称作为键，参数作为值
      plugins: {
        "postcss-px-to-viewport": {
          unitToConvert: "px", // 默认值`px`，需要转换的单位
          viewportWidth: 375, // 视窗的宽度,对应设计稿宽度
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
          propList: ["*"], // 转化为vw的属性列表
          viewportUnit: "vw", // 指定需要转换成视窗单位
          fontViewportUnit: "vw", // 字体使用的视窗单位
          selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
          mediaQuery: false, // 允许在媒体查询中转换`px`
          minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
          replace: true, // 是否直接更换属性值而不添加备用属性
          exclude: [], // 忽略某些文件夹下的文件或特定文件
          landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: "vw", // 横屏时使用的单位
          landscapeWidth: 1134 // 横屏时使用的视窗宽度
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {}
      }
    },
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
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://www.alone.chat' : 'http://127.0.0.1:8999'
  },

  // 防止打包多次
  vendor: ['element-ui']
}
