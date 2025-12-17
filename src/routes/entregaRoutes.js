const express = require('express');
const router = express.Router();
const EntregaController = require('../controllers/entregaController');
const autenticacao = require('../middlewares/autenticacao');

// POST http://localhost:3000/entregas -> Criar entrega
router.post('/', autenticacao, EntregaController.store);

// GET http://localhost:3000/entregas -> Listar entregas
router.get('/', autenticacao, EntregaController.index);

// GET http://localhost:3000/entregas/:id -> Buscar entrega por ID
router.get('/:id', autenticacao, EntregaController.show);

// PUT http://localhost:3000/entregas/:id -> Atualizar entrega
router.put('/:id', autenticacao, EntregaController.update);

// DELETE http://localhost:3000/entregas/:id -> Remover entrega
router.delete('/:id', autenticacao, EntregaController.delete);

module.exports = router;
