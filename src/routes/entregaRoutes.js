const express = require('express');
const router = express.Router();
const EntregaController = require('../controllers/entregaController');
const autenticacao = require('../middlewares/autenticacao');
const autorizar = require('../middlewares/autorizar')

// POST http://localhost:3000/entregas -> Criar entrega
router.post('/', autenticacao, autorizar(['ADMIN']), EntregaController.store);

// GET http://localhost:3000/entregas -> Listar entregas
router.get('/', autenticacao, autorizar(['ADMIN']), EntregaController.index);

// GET http://localhost:3000/entregas/:id -> Buscar entrega por ID
router.get('/:id', autenticacao, autorizar(['ADMIN']), EntregaController.show);

// PUT http://localhost:3000/entregas/:id -> Atualizar entrega
router.put('/:id', autenticacao, autorizar(['ADMIN, MOTORISTA']), EntregaController.update);

// DELETE http://localhost:3000/entregas/:id -> Remover entrega
router.delete('/:id', autenticacao, autorizar(['ADMIN']), EntregaController.delete);

module.exports = router;
