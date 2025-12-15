const express = require('express');
const router = express.Router();
const RotaController = require('../controllers/rotaController');

// POST http://localhost:3000/rotas -> Criar rota
router.post('/', RotaController.store);

// GET http://localhost:3000/rotas -> Listar rotas
router.get('/', RotaController.index);

// GET http://localhost:3000/rotas/:id -> Buscar rota por ID
router.get('/:id', RotaController.show);

// PUT http://localhost:3000/rotas/:id -> Atualizar rota
router.put('/:id', RotaController.update);

// DELETE http://localhost:3000/rotas/:id -> Remover rota
router.delete('/:id', RotaController.delete);

module.exports = router;
