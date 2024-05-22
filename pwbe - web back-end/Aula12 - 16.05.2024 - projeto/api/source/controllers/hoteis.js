// Importe o PrismaClient
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//CREATE
const create = async (req, res) => {
    const data = req.body;
    try {
        const destino = await prisma.destinos.create({
            data: { nome: data.nome, valor: data.valor, data: data.data }
        });
        res.status(201).json(destino).end();
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao criar destino' });
    }
}

//READ
const read = async (req, res) => {
    try {
        const destinos = await prisma.destinos.findMany({
            include: {
                hoteis: {
                    include: {
                        telefones: true
                    }
                },
                pontos: true
            }
        });
        res.status(200).json(destinos).end();
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao recuperar destinos' });
    }
}

//UPDATE
const update = async (req, res) => {
    const data = req.body;
    try {
        const destino = await prisma.destinos.update({
            where: { id: Number(req.params.id) },
            data
        });
        res.status(200).json(destino).end();
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao atualizar destino' });
    }
}

//DELETE
const del = async (req, res) => {
    try {
        const destino = await prisma.destinos.delete({
            where: { id: Number(req.params.id) }
        });
        res.status(200).json(destino).end();
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao excluir destino' });
    }
}

module.exports = {
    create,
    read,
    update,
    del,
}
