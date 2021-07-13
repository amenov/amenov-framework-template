module.exports = {
  global: {},
  server: {},
  moduleAlias: {},
  middleware: {
    rateLimit: {},
    cors: {},
    validator: {},
    router: {},
    extend: () => []
  },
  start({ config, express, app, server }) {}
}
