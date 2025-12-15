const express = require('express');
const router = express.Router();
const EntregaController = require('../controllers/entregaController');

// POST http://localhost:3000/entregas -> Criar entrega
router.post('/', EntregaController.store);

// GET http://localhost:3000/entregas -> Listar entregas
router.get('/', EntregaController.index);

// GET http://localhost:3000/entregas/:id -> Buscar entrega por ID
router.get('/:id', EntregaController.show);

// PUT http://localhost:3000/entregas/:id -> Atualizar entrega
router.put('/:id', EntregaController.update);

// DELETE http://localhost:3000/entregas/:id -> Remover entrega
router.delete('/:id', EntregaController.delete);

module.exports = router;
