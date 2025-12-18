const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');
const autenticacao = require('../middlewares/autenticacao'); // só pode acessar com token
const autorizar = require('../middlewares/autorizar')

// POST http://localhost:3000/clientes -> Criar cliente
router.post('/', autenticacao, autorizar(['ADMIN']), ClienteController.store);

// GET http://localhost:3000/clientes -> Listar clientes
router.get('/', autenticacao, autorizar(['ADMIN']), ClienteController.index);

// GET http://localhost:3000/clientes/:id -> Buscar cliente por ID
router.get('/:id', autenticacao, autorizar(['ADMIN']), ClienteController.show);

// PUT http://localhost:3000/clientes/:id -> Atualizar cliente
router.put('/:id', autenticacao, autorizar(['ADMIN']), ClienteController.update);

// DELETE http://localhost:3000/clientes/:id -> Remover cliente
router.delete('/:id', autenticacao, autorizar(['ADMIN']), ClienteController.delete);

module.exports = router;

