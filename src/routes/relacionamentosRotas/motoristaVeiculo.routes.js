const express = require('express');
const router = express.Router();
const MotoristaVeiculoController = require('../controllers/motoristaVeiculoController');

// Atribuir veículo ao motorista
// PUT /api/motoristas/:id/atribuir-veiculo
router.put('/motoristas/:id/atribuir-veiculo', MotoristaVeiculoController.atribuirVeiculo);

// Liberar veículo do motorista
// PUT /api/motoristas/:id/liberar-veiculo
router.put('/motoristas/:id/liberar-veiculo', MotoristaVeiculoController.liberarVeiculo);

// Listar veículos disponíveis
// GET /api/veiculos/disponiveis
router.get('/veiculos/disponiveis', MotoristaVeiculoController.listarDisponiveis);

module.exports = router;
