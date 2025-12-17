const express = require('express');
const router = express.Router();
const controller = require('../../controllers/relacionamentosController/rotaEntregaController');
const autenticacao = require('../../middlewares/autenticacao');
const autorizar = require('../../middlewares/autorizar');

// GET /api/rotas/:id/entregas
router.get('/rotas/:id/entregas', autenticacao, autorizar(['ADMIN']), controller.listarEntregas);

// POST /api/rotas/:id/entregas
router.post('/rotas/:id/entregas', autenticacao, autorizar(['ADMIN']), controller.adicionarEntrega);

// DELETE /api/rotas/:id/entregas/:entrega_id
router.delete('/rotas/:id/entregas/:entrega_id', autenticacao, autorizar(['ADMIN']), controller.removerEntrega);

module.exports = router;
