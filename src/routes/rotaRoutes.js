const express = require('express');
const router = express.Router();
const RotaController = require('../controllers/rotaController');

// Cria a rota (cabeçalho)
router.post('/', RotaController.store);

// Adiciona entrega na rota (validação)
// Exemplo URL: POST /rotas/1/adicionar-entrega
router.post('/:idRota/adicionar-entrega', RotaController.adicionarEntrega);

module.exports = router;