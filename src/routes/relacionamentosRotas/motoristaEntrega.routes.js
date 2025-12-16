const express = require('express');
const router = express.Router();
const controller = require('../controllers/motoristaEntregaController');

// Lista entregas do motorista
router.get('/motoristas/:id/entregas', controller.listarEntregas);

// Histórico de entregas concluídas
router.get('/motoristas/:id/historico', controller.historico);

// Atribuir motorista a uma entrega
router.post('/entregas/:id/atribuir-motorista', controller.atribuirMotorista);

module.exports = router;

