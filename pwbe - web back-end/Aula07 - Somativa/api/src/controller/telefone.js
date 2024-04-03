const con = require('../connect/connect').con;

const create = (req, res) => {
    const { matricula, numero } = req.body;

    let query = `INSERT INTO telefone (matricula, numero) VALUE ('${matricula}', '${numero}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            const novo = {
                matricula,
                numero
            }
            res.status(201).json(novo).end();
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(200).json(result).end();
        }
    })
}

const update = (req, res) => {
    const { matricula } = req.params;
    const { numero } = req.body;

    let query = `UPDATE telefone SET  numero = '${numero}' WHERE matricula = '${matricula}'`;
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

    let query = `DELETE FROM telefone WHERE matricula = '${matricula}'`;
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
}