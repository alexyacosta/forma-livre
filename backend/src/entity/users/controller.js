const humps = require('humps')

const model = require('./model')

const getAllUsers = async (req, res, next) => {
  const users = humps.camelizeKeys(await model.getAllUsers())
  res.send({ users })
}

const createUser = async (req, res, next) => {
  res.send('hello')
}

module.exports = {
  getAllUsers,
  createUser
}
