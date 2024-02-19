const express = require('express');
const routes = express.Router();

const item = require('../controller/item');

const test = (req, res) => {
    res.send('Backend: Respondendo! 👍');
}

//Rotas de Saída
routes.get('/', test);
routes.post('/items', item.create);
routes.get('/items', item.read);
routes.put('/items/:id', item.update);
routes.delete('/items/:id', item.del);

module.exports = routes;