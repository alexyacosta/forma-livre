const humps = require('humps')

const model = require('./model')

const getAllUsers = async (req, res, next) => {
  res.send('hello')
}

const createUser = async (req, res) => {
  const full_name = req.body.full_name;
  const username = req.body.username;
  const passw = req.body.passw;
  res.send({ full_name, username })
}

module.exports = {
  getAllUsers,
  createUser
}
