const express = require('express')
const router = express.Router()

const turma = require('./controller/turma')
const aluno = require('./controller/aluno')
const professor = require('./controller/professor')

router.get('/', turma.iniciar)
router.get('/aluno', aluno.iniciar)
router.get('/professor', professor.iniciar)

module.exports = router