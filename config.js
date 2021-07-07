module.exports = {
  global: {},
  server: {},
  moduleAlias: {},
  middleware: {
    rateLimit: {},
    cors: {},
    router: {},
    extend: () => []
  },
  start({ config, express, app, server }) {}
}
