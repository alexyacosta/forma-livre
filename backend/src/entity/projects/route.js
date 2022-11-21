const Router = require('express-promise-router')

const controller = require('./controller')

const router = Router()
module.exports = router

router.get('/', controller.getAllProjects)
router.get('/id/', controller.getProjectByName)
router.post('/', controller.createProject)
router.put('/', controller.updateProject)
router.delete('/', controller.deleteProject)
