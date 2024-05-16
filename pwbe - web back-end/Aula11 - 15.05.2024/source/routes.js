const express = require('express');
const router = express.Router();
const clientes = require('./controllers/clientes');
const telefone = require('./controllers/telefones')

router.get('/', (req, res) => {
    res.send('Hello World!');
});

//Clientes
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes/:id', clientes.del);

router.get('/clientes/:id',clientes.readbyId);

router.post('/clientes/nome',clientes.readByName);


//Telefones
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.del);

module.exports = router;