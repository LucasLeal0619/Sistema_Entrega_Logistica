const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

// POST http://localhost:3000/clientes -> Criar cliente
router.post('/', ClienteController.store);

// GET http://localhost:3000/clientes -> Listar clientes
router.get('/', ClienteController.index);

// GET http://localhost:3000/clientes/:id -> Buscar cliente por ID
router.get('/:id', ClienteController.show);

// PUT http://localhost:3000/clientes/:id -> Atualizar cliente
router.put('/:id', ClienteController.update);

// DELETE http://localhost:3000/clientes/:id -> Remover cliente
router.delete('/:id', ClienteController.delete);

module.exports = router;

