const express = require('express');
const router = express.Router();
const veiculoRotaController = require('../controllers/veiculoRotaController');

// GET /api/veiculos/:id/rotas
router.get('/veiculos/:id/rotas', veiculoRotaController.listarRotas);

// GET /api/veiculos/:id/historico
router.get('/veiculos/:id/historico', veiculoRotaController.historico);

module.exports = router;
