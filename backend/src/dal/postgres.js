const pgPromise = require('pg-promise')

const {
  APP_DATABASE_NAME: host,
  POSTGRES_DB: database,
  POSTGRES_USER: user,
  POSTGRES_PASSWORD: password,
  POSTGRES_PORT: port
} = process.env

const pgp = pgPromise({
  error: (_, e) => {
    if (e.cn) {
      console.error('Connection error: %j', e.cn)
    }

    if (e.query) {
      console.error('Query error: %j', e.query)
      if (e.params) {
        console.error('Query error (parameters): %j', e.params)
      }
    }
  }
})

module.exports = pgp({ host, database, user, password, port: parseInt(port), ssl: false })
