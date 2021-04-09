export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL: 'http://localhost:8080'
  },

  auth: {
    redirect: {
      login: '/login',
      callback: '/callback',
      logout: '/login',
      home: '/',
    },
    strategies: {
      auth0: {
        domain: process.env.AUTHENTICATION_AUTH0_DOMAIN,
        client_id: process.env.AUTHENTICATION_AUTH0_CLIENT_ID,
        audience: process.env.AUTHENTICATION_AUTH0_AUDIENCE,
      },
    }
  },

  router: {
    middleware: ['auth']
  }
}
