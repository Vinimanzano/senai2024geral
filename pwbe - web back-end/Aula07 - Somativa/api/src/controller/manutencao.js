const con = require('../connect/connect').con;

const create = (req, res) => {
    const {id, placa, matricula, inicio, fim, descricao} = req.body;

    let query = `INSERT INTO manutencao(id, placa, matricula, inicio, fim, descricao) VALUE ('${id}', '${placa}', '${matricula}', '${inicio}', '${fim}', '${descricao}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            const novo = {
                id,
                placa,
                matricula,
                inicio,
                fim,
                descricao
            }
            res.status(201).json(novo).end();
        }
    })
}

const readdata = (req, res) => {
    con.query('SELECT * FROM manutencao WHERE fim IS NULL', (err, result) => {
    if (err) {
        res.status(400).json(err).end();
        } else {
        res.status(200).json(result).end();
        }
    }) 
}

const read = (req, res) => {
    con.query('SELECT * FROM manutencao', (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result).end();
        }
    })
}

const update = (req, res) => {
    const { id } = req.params;
    const {  placa, matricula, inicio, fim, descricao } = req.body;

    let query = `UPDATE manutencao SET placa = '${placa}', matricula = '${matricula}', inicio = '${inicio}', fim = '${fim}', descricao = '${descricao}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else if(result.affectedRows > 0) {
            res.status(202).json(req.body).end();
        } else {
            res.status(404).json({message: 'Item não encontrado'}).end();
        }
    })
}

const del = (req, res) => {
    const { id } = req.params;

    let query = `DELETE FROM manutencao WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else if(result.affectedRows > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({message: 'Item não encontrado'}).end();
        }
    })
}

module.exports = {
    create,
    readdata,
    read,
    update,
    del
}