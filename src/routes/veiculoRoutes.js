const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/veiculoController');

// POST http://localhost:3000/veiculos -> Cria veículo
router.post('/', VeiculoController.store);

// GET http://localhost:3000/veiculos -> Lista veículos
router.get('/', VeiculoController.index);

// GET http://localhost:3000/veiculos/:id -> Busca veículo por ID
router.get('/:id', VeiculoController.show);

// PUT http://localhost:3000/veiculos/:id -> Atualiza veículo
router.put('/:id', VeiculoController.update);

// DELETE http://localhost:3000/veiculos/:id -> Remove veículo
router.delete('/:id', VeiculoController.delete);

module.exports = router;

