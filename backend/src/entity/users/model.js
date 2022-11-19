const postgres = require('../../dal/postgres')

module.exports.getAllUsers = () => postgres.query(`
    SELECT *
    FROM users
`)

module.exports.createUser = () => postgres.query(`
    SELECT *
    FROM users
`)
