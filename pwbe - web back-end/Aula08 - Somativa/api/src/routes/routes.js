const express = require('express');
const routes = express.Router();

// const veiculo = require('./Controller/veiculo');
// const cliente = require('./Controller/cliente');
// const telefone = require('./Controller/telefone');
const aluguel = require('../Controller/aluguel');

routes.get( '/', (req, res) => {  
    return res.status(200).json({ message: 'Server Rodando' });  
});

// routes.get('/veiculo', veiculo.read);
// routes.post('/veiculo', veiculo.create);
// routes.put('/veiculo/:placa', veiculo.update);
// routes.delete('/veiculo/:placa', veiculo.del);

// routes.get('/cliente', cliente.read);
// routes.post('/cliente', cliente.create);
// routes.put('/cliente/:cpf', cliente.update);
// routes.delete('/cliente/:cpf', cliente.del);

// routes.get('/telefone', telefone.read);

routes.get('/aluguel', aluguel.read);
routes.post('/aluguel', aluguel.create);
routes.put('/aluguel/:id', aluguel.update);
routes.delete('/aluguel/:id', aluguel.del);

routes.get('/aluguel/reservados', aluguel.readReservados);
routes.get('/aluguel/alugados', aluguel.readAlugados);
routes.get('/aluguel/relatorio', aluguel.readRelatorio);

module.exports = routes;