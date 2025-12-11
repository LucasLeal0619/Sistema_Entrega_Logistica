const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristaController');

// POST http://localhost:3000/motoristas -> Criar motorista
router.post('/', MotoristaController.store);

// GET http://localhost:3000/motoristas -> Listar motoristas
router.get('/', MotoristaController.index);

// GET http://localhost:3000/motoristas/:id -> Buscar motorista por ID
router.get('/:id', MotoristaController.show);

// PUT http://localhost:3000/motoristas/:id -> Atualizar motorista
router.put('/:id', MotoristaController.update);

// DELETE http://localhost:3000/motoristas/:id -> Remover motorista
router.delete('/:id', MotoristaController.delete);

module.exports = router; 