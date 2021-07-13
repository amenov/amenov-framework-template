require('dotenv').config()

const env = (envKey, defaultValue) => {
  return process.env[envKey] ?? defaultValue ?? null
}

const getConnectionConfig = (mode) => ({
  [mode]: {
    dialect: env('DB_DIALECT', 'mysql'),
    host: env('DB_HOST', '127.0.0.1'),
    port: env('DB_PORT', '3306'),
    database: env('DB_NAME', 'database_' + mode),
    username: env('DB_USERNAME', 'root'),
    password: env('DB_PASSWORD', 'password_' + mode),
    logging: eval(env('DB_LOGGING', true))
  }
})

module.exports = {
  ...getConnectionConfig('development'),
  ...getConnectionConfig('test'),
  ...getConnectionConfig('production')
}
