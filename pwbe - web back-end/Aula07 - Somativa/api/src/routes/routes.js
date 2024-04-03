const express = require('express');
const routes = express.Router();

const funcionario = require('../controller/funcionario');
const manutencao = require('../controller/manutencao');
const telefone = require('../controller/telefone');
const veiculo = require('../controller/veiculo');

const test = (req, res) => {
    res.send('Backend: Respondendo! 👍');
}

routes.get('/', test);

// Rotas de Saída
routes.post('/funcionario', funcionario.create);
routes.get('/funcionario', funcionario.read);
routes.put('/funcionario/:matricula', funcionario.update);
routes.delete('/funcionario/:matricula', funcionario.del);

routes.post('/telefone', telefone.create);
routes.get('/telefone', telefone.read);
routes.put('/telefone/:matricula', telefone.update);
routes.delete('/telefone/:matricula', telefone.del);

routes.post('/manutencao', manutencao.create);
routes.get('/manutencao', manutencao.read);
routes.get('/manutencaodata', manutencao.readdata);
routes.put('/manutencao/:id', manutencao.update);
routes.delete('/manutencao/:id', manutencao.del);

routes.post('/veiculo', veiculo.create);
routes.get('/veiculo', veiculo.read);
routes.put('/veiculo/:placa', veiculo.update);
routes.delete('/veiculo/:placa', veiculo.del);

module.exports = routes;
