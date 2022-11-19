const Router = require('express-promise-router')

const controller = require('./controller')

const router = Router()
module.exports = router

router.get('/', controller.getAllUsers)
router.post('/', controller.createUser)

router.post('/login', controller.authUser)
