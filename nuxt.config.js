const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env: {
    apiUrl: process.env.API_URL || 'http://127.0.0.1:3030'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/rollbar'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      {
        resources: '@/assets/styles/main.scss'
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.API_URL || 'http://127.0.0.1:3030'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.output.globalObject = 'this'

      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'vue-svg-loader'
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
