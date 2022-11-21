const humps = require('humps')

const model = require('./model')

module.exports.authUser = async (req, res, next) => {
  try {
    const { username, passw } = req.body

    if (!(typeof username === 'string' && typeof passw === 'string')) {
      return res.sendStatus(400)
    }

    const userId = await model.authUser(username, passw)
    return res.send({
      isAuthenticated: userId !== null,
      userId
    })
  } catch (e) {
    next(e)
  }
}

module.exports.getAllUsers = async (req, res, next) => {
  res.send('hello')
}

module.exports.createUser = async (req, res, next) => {
  try {
    const { fullName, username, passw } = req.body

    if (!(typeof fullName === 'string' && typeof username === 'string' && typeof passw === 'string')) {
      return res.sendStatus(400)
    }
    
    const usernameAlreadyTaken = await model.checkIfUserExists(username)
    if (usernameAlreadyTaken) {
      return res.send({
        created: false,
        userId: null,
        message: `Usuário "${username}" já foi registrado`
      })
    }

    const userId = await model.createUser(fullName, username, passw)
    res.send({
      created: true,
      userId,
      message: `Usuário "${username}" criado com sucesso`
    })
  } catch (e) {
    next(e)
  }
}
