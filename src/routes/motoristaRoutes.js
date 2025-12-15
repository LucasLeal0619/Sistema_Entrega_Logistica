const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristaController');

// POST http://localhost:3000/motoristas -> Criar motorista
const autenticacao = require('../middlewares/autenticacao'); // só pode acessar com token
const autorizar = require('../middlewares/autorizar');// só admin pode criar
router.post('/', autenticacao, autorizar(['ADMIN']), MotoristaController.store);

// GET http://localhost:3000/motoristas -> Listar motoristas
router.get('/', autenticacao, MotoristaController.index); // só pode acessar com token

// GET http://localhost:3000/motoristas/:id -> Buscar motorista por ID
router.get('/:id', MotoristaController.show);

// PUT http://localhost:3000/motoristas/:id -> Atualizar motorista
router.put('/:id', MotoristaController.update);

// DELETE http://localhost:3000/motoristas/:id -> Remover motorista
router.delete('/:id', MotoristaController.delete);

module.exports = router; 