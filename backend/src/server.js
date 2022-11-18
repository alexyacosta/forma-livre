const express = require('express')
const bodyParser = require('body-parser')

const entityUsers = require('./entity/users')
const entityProjects = require('./entity/projects')

const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rotas
app.use('/api/users', entityUsers)
app.use('/api/projects', entityProjects)

// entrypoint
app.listen(9999, () => console.log('listening...'))
