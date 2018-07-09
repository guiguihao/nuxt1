module.exports = {

  modules: [
  '@nuxtjs/axios',
  '@nuxtjs/proxy'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'myproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~static/favicon.ico' }
    ],
    script: [
     {src: 'https://hm.baidu.com/hm.js?41321b6b4b6c10be3cf45676d2b31deb'},/*引入百度统计的js*/
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~static/iconfont/iconfont.css',
    '~static/css/animate.css'
  ],
  
  plugins: ['~/plugins/elementUi'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/elementUi'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** axios 设置
  */
  axios: { 
    prefix: '/', 
    proxy: true // Can be also an object with default options 
  }, 
  proxy: { 
    '/api/': { target: 'http://api.rootopen.com', pathRewrite: {'^/api/': ''} } }


}
