const express = require('express');
const router = express.Router();
const controller = require('../controllers/rotaEntregaController');

// GET /api/rotas/:id/entregas
router.get('/rotas/:id/entregas', controller.listarEntregas);

// POST /api/rotas/:id/entregas
router.post('/rotas/:id/entregas', controller.adicionarEntrega);

// DELETE /api/rotas/:id/entregas/:entrega_id
router.delete('/rotas/:id/entregas/:entrega_id', controller.removerEntrega);

module.exports = router;
