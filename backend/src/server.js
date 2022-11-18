const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const entityUsers = require('./entity/users')
const entityProjects = require('./entity/projects')

const app = express()
// const port = parseInt(process.env.APP_BACKEND_PORT)
const port = 10999

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('common'))

// rotas
app.use('/api/users', entityUsers)
app.use('/api/projects', entityProjects)

// entrypoint
app.listen(port, () => console.log(`listening on port ${port}`))
