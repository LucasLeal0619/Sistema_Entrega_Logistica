const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristaController');
const autenticacao = require('../middlewares/autenticacao');
const autorizar = require('../middlewares/autorizar');// só admin pode criar

// POST http://localhost:3000/motoristas -> Criar motorista
router.post('/', autenticacao, autorizar(['ADMIN']), MotoristaController.store);

// GET http://localhost:3000/motoristas -> Listar motoristas
router.get('/', autenticacao, autorizar(['ADMIN']), MotoristaController.index); // só pode acessar com token

// GET http://localhost:3000/motoristas/:id -> Buscar motorista por ID
router.get('/:id', autenticacao, autorizar(['ADMIN']), MotoristaController.show);

// PUT http://localhost:3000/motoristas/:id -> Atualizar motorista
router.put('/:id', autenticacao,  autorizar(['ADMIN']),  MotoristaController.update);

// DELETE http://localhost:3000/motoristas/:id -> Remover motorista
router.delete('/:id', autenticacao,  autorizar(['ADMIN']), MotoristaController.delete);

module.exports = router; 