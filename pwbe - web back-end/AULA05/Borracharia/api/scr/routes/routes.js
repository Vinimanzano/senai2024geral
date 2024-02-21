const express = require('express');
const routes = express.Router();

const item = require('../controller/fornecedores');
const item = require('../controller/clientes');
const item = require('../controller/produtos');

const test = (req, res) => {
    res.send('Backend: Respondendo! 👍');
}

//Rotas de Saída
routes.get('/clientes', test);
routes.post('/clientes', item.create);
routes.get('/clientes', item.read);
routes.put('/clientes/:id', item.update);
routes.delete('/clientes/:id', item.del);

//Rotas de Saída
routes.get('/fornecedores', test);
routes.post('/fornecedores', item.create);
routes.get('/fornecedores', item.read);
routes.put('/fornecedores/:id', item.update);
routes.delete('/fornecedores/:id', item.del);

//Rotas de Saída
routes.get('/produtos', test);
routes.post('/produtos', item.create);
routes.get('/produtos', item.read);
routes.put('/produtos/:id', item.update);
routes.delete('/produtos/:id', item.del);

module.exports = routes;