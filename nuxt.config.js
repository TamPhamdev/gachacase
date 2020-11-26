// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'gacha-game',
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
    // extend(config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     /**
    //      * Initialise SVG Sprites
    //      */

    //     // Excludes /assets/svg from url-loader
    //     const svgRule = config.module.rules.find((rule) =>
    //       rule.test.test('.svg')
    //     )
    //     svgRule.test = /\.(png|jpe?g|gif|webp)$/

    //     // Once url-loader doesn't deal anymore
    //     // with svg files we can make svg-sprite-loader
    //     // and svgo-loader to deal with them.
    //     config.module.rules.push({
    //       test: /\.svg$/,
    //       use: [
    //         {
    //           loader: 'svg-sprite-loader',
    //           options: {
    //             extract: true,
    //             spriteFilename: 'icons-[name]',
    //           },
    //         },
    //         // {
    //         //   loader: 'svgo-loader',
    //         //   options: {
    //         //     plugins: [{ removeViewbox: false }],
    //         //   },
    //         // },
    //       ],
    //     })
    //   }
    // },
    // plugins: [new SpriteLoaderPlugin()],
    sass: {},
    transpile: [/^element-ui/],
  },
}
