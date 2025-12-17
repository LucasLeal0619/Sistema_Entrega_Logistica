const express = require('express');
const router = express.Router();
const RotaController = require('../controllers/rotaController');

const autenticacao = require('../middlewares/autenticacao');
const autorizar = require('../middlewares/autorizar');

// Criar rota (ADMIN)
router.post(  '/', autenticacao,autorizar(['ADMIN']),RotaController.store);

// Listar rotas
router.get('/', autenticacao, RotaController.index);

// Buscar rota por ID
router.get('/:id', autenticacao, RotaController.show);

// Adicionar entrega à rota
router.post('/:idRota/entregas',autenticacao,autorizar(['ADMIN']),RotaController.adicionarEntrega);

// Dashboard da rota (A+B+C+D)
router.get('/:id/dashboard',autenticacao,autorizar(['ADMIN']),RotaController.dashboard);

// Atualizar rota
router.put('/:id',autenticacao,autorizar(['ADMIN']),RotaController.update);

// Remover rota
router.delete('/:id',autenticacao,autorizar(['ADMIN']),RotaController.delete);

module.exports = router;