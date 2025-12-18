const express = require('express');
const router = express.Router();

const motoristaEntregaController = require('../../controllers/relacionamentosController/motoristaEntregaController');

const autenticacao = require('../../middlewares/autenticacao');
const autorizar = require('../../middlewares/autorizar');

// Listar entregas de um motorista
// GET /api/motoristas/:id/entregas
router.get('/motoristas/:id/entregas', autenticacao, motoristaEntregaController.listarEntregas);

// Atribuir motorista a uma entrega
// POST /api/entregas/:id/atribuir-motorista
router.post('/entregas/:id/atribuir-motorista',autenticacao, motoristaEntregaController.atribuirMotorista);

// Histórico de entregas do motorista
// GET /api/motoristas/:id/historico
router.get('/motoristas/:id/historico',autenticacao, motoristaEntregaController.historico);

module.exports = router;