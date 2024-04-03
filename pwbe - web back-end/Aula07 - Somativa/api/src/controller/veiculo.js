const con = require('../connect/connect').con;

const create = (req, res) => {
    const {placa, modelo, marca, ano} = req.body;

    let query = `INSERT INTO veiculo(placa, modelo, marca, ano) VALUE ('${placa}', '${modelo}', '${marca}', '${ano}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            const novo = {
                placa,
                modelo,
                marca,
                ano
            }
            res.status(201).json(novo).end();
        }
    })
}

const read = (req, res) => {

    con.query('SELECT * FROM veiculo', (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result).end();
        }
    })  
}

const update = (req, res) => {
    const { placa } = req.params;
    const { modelo, marca, ano } = req.body;

    let query = `UPDATE veiculo SET modelo = '${modelo}', marca = '${marca}', ano = '${ano}' WHERE placa = '${placa}'`;
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
    const { placa } = req.params;

    let query = `DELETE FROM veiculo WHERE placa = '${placa}'`;
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
    read,
    update,
    del
};