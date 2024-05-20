const express = require('express');
const router = express.Router();
const hoteis = require('./controllers/hoteis')
const destinos = require('./controllers/destinos')
const telefones = require('./controllers/telefones')
const pontos_turisticos = require('./controllers/pontos_turisticos')

router.get('/', async (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.put('/destinos/:id', destinos.update);
router.delete('/destinos/:id', destinos.del);

router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.put('/hoteis/:id', hoteis.update);
router.delete('/hoteis/:id', hoteis.del);

router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);
router.put('/telefones/:id', telefones.update);
router.delete('/telefones/:id', telefones.del);

router.post('/pontos_turisticos', pontos_turisticos.create);
router.get('/pontos_turisticos', pontos_turisticos.read);
router.put('/pontos_turisticos/:id', pontos_turisticos.update);
router.delete('/pontos_turisticos/:id', pontos_turisticos.del);

module.exports = router;