const Router = require('express-promise-router')

const controller = require('./controller')

const router = Router()
module.exports = router

router.get('/', controller.getProject)
router.post('/', controller.createProject)
