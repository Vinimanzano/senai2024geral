const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
    const turmas = await prisma.turma.findMany({
        select: {
            id: true,
            nome: true,
            abreviacao: true,
            alunos: {
                select: {
                    ra: true,
                    nome: true,
                    nascimento: true
                }
            },
            professores: true
        }
    });
    res.render('index', { turmas: turmas });
}


const alterar = async (req, res) => {
    const resultado = await prisma.professor.update({
        data: req.body,
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/professor');
}

module.exports = {
    listar,
    alterar
}