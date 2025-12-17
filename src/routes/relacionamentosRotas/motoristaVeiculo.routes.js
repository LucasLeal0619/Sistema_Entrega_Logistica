const express = require('express');
const router = express.Router();
const MotoristaVeiculoController = require('../../controllers/relacionamentosController/motoristaVeiculoController');
const autenticacao = require('../../middlewares/autenticacao');
const autorizar = require('../../middlewares/autorizar');


// Atribuir veículo ao motorista
// PUT /api/motoristas/:id/atribuir-veiculo
router.put('/motoristas/:id/atribuir-veiculo', autenticacao, autorizar(['ADMIN']), MotoristaVeiculoController.atribuirVeiculo);

// Liberar veículo do motorista
// PUT /api/motoristas/:id/liberar-veiculo
router.put('/motoristas/:id/liberar-veiculo', autenticacao, autorizar(['ADMIN']), MotoristaVeiculoController.liberarVeiculo);

// Listar veículos disponíveis
// GET /api/veiculos/disponiveis
router.get('/veiculos/disponiveis', autenticacao, autorizar(['ADMIN']), MotoristaVeiculoController.listarDisponiveis);

module.exports = router;


