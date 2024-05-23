const express = require('express')
const routes = express.Router()

const turma = require('./controller/turma')

routes.get('/turma', turma.iniciar)

module.exports = routes