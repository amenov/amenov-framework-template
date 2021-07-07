module.exports = {
  global: {},
  server: {},
  middleware: {
    // RATE-LIMIT
    rateLimit: {},
    // CORS
    cors: {},
    // ROUTER
    router: {},
    // MODULE-ALIAS
    moduleAlias: {},
    // EXTEND
    extend: []
  },
  start({ config, express, app, server }) {}
}
