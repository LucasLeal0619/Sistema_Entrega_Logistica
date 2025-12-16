const express = require('express');
const router = express.Router();

const MotoristaRotaController = require('../../controllers/relacionamentosController/motoristaRotaController');

// Lista rotas do motorista
router.get('/motoristas/:id/rotas', MotoristaRotaController.listarRotas);

// Cria rota vinculada ao motorista
router.post('/motoristas/:id/rotas', MotoristaRotaController.criarRota);

module.exports = router;
