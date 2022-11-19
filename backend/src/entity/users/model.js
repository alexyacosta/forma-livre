const postgres = require('../../dal/postgres')

module.exports.getAllUsers = () => postgres.query(`
    SELECT *
    FROM users
`)

module.exports.authUser = async (username, passw) => {
  const query = `
    SELECT u.id
    FROM   users AS u
    WHERE  u.username = $(username) AND u.passw = $(passw)
  `

  const [res] = await postgres.query(query, { username, passw })
  return res === undefined ? null : res.id
}

module.exports.createUser = async (fullName, username, passw) => {
  const query = `
    INSERT INTO users (full_name, username, passw)
    VALUES (
        $(fullName),
        $(username),
        $(passw)
    )
    RETURNING id;
  `

  const [res] = await postgres.query(query, { fullName, username, passw })
  return res.id
}

module.exports.checkIfUserExists = async (username) => {
  const query = `
    SELECT COUNT(*)
    FROM   users AS u
    WHERE  u.username = $(username);
  `

  const [res] = await postgres.query(query, { username })
  return res.count > 0
}
