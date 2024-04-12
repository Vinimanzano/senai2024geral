const con = require('../connect/connect').con;

const create = (req, res) => {
    const {matricula, nome} = req.body;

    let query = `INSERT INTO funcionario (matricula, nome ) VALUE ('${matricula}', '${nome}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            const novo = {
                matricula,
                nome
            }
            res.status(201).json(novo).end();
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM funcionario', (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result).end();
        }
    })
}

const update = (req, res) => {
    const { matricula } = req.params;
    const { nome } = req.body;

    let query = `UPDATE funcionario SET nome = '${nome}' WHERE matricula = '${matricula}'`;
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
    const { matricula } = req.params;

    let query = `DELETE FROM funcionario WHERE matricula = '${matricula}'`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else if(result.affectedRows > 0) {
            res.status(204).json(result).end();
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
}