const express = require('express');
const router = express.Router();
const veiculoRotaController = require('../../controllers/relacionamentosController/veiculoRotaController');
const autenticacao = require('../../middlewares/autenticacao');
const autorizar = require('../../middlewares/autorizar');

// GET /api/veiculos/:id/rotas
router.get('/veiculos/:id/rotas', autenticacao, autorizar(['ADMIN']), veiculoRotaController.listarRotas);

// GET /api/veiculos/:id/historico
router.get('/veiculos/:id/historico', autenticacao, autorizar(['ADMIN']),veiculoRotaController.historico);

module.exports = router;
