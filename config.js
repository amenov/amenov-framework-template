module.exports = {
  middleware: {
    // RATE-LIMIT
    rateLimit: {
      windowMs: 5 * 60 * 1000,
      max: 1000
    },
    // CORS
    cors: {
      // config
    },
    // ROUTER
    router: {
      baseUrl: '/',
      routesPath: '/routes',
      apiDocs: {
        title: 'API-docs'
      }
    },
    // EXTEND
    extend: []
  }
}
