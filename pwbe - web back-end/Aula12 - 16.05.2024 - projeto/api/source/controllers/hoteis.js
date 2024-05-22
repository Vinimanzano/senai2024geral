// controllers/hoteis.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Create
const create = async (req, res) => {
    try {
        const data = req.body;
        // Verificar se id_destino está presente nos dados
        if (!data.id_destino) {
            throw new Error("O campo id_destino é obrigatório.");
        }

        // Convertendo avaliacao para string
        data.avaliacao = String(data.avaliacao);

        const hotel = await prisma.hoteis.create({
            data: {
                nome: data.nome,
                valor: data.valor,
                avaliacao: data.avaliacao,
                email: data.email,
                site: data.site,
                id_destino: parseInt(data.id_destino) // Adicione essa linha para definir o id_destino
            }
        });
        res.status(201).json(hotel);
    } catch (error) {
        console.error("Erro ao criar hotel:", error);
        res.status(500).send("Erro ao criar hotel");
    }
};

//READ
const read = async (req, res) => {
    try {
        const hoteis = await prisma.hoteis.findMany({
            include: {
                telefones: true
            }
        });
        res.status(200).json(hoteis);
    } catch (error) {
        console.error("Erro ao buscar hotéis:", error);
        res.status(500).send("Erro ao buscar hotéis");
    }
};

//UPDATE
const update = async (req, res) => {
    try {
        const data = req.body;
        // Convertendo o id_destino para número inteiro
        data.id_destino = parseInt(data.id_destino);
        const hotel = await prisma.hoteis.update({
            where: {
                id: 1
            },
            data: data // Usando os dados recebidos do corpo da requisição
        });
        res.status(200).json(hotel);
    } catch (error) {
        console.error("Erro ao atualizar hotel:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};

//DELETE
const del = async (req, res) => {
    const { id } = req.params;
    try {
        const hoteis = await prisma.hoteis.findMany({
            where: {
                id_destino: parseInt(id)
            }
        });
        if (hoteis.length > 0) {
            return res.status(400).json({ error: "Não é possível excluir este destino, pois existem hotéis associados a ele." });
        }
        await prisma.destinos.delete({
            where: {
                id: parseInt(id)
            }
        });

        res.status(200).json({ message: "Destino excluído com sucesso." });
    } catch (error) {
        console.error("Erro ao excluir destino:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};


module.exports = {
    create,
    read,
    update,
    del
};
