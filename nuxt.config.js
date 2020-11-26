// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/app/',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Gacha:case',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/index.scss', 'element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/assets/icons/svg/',
    output: '~/assets/icons/sprite/',
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    sass: {},
    transpile: [/^element-ui/],
  },
}
