const express = require('express');
const router = express.Router();
const RotaController = require('../controllers/rotaController');

const auth = require('../middlewares/autenticacao');
const autorizar = require('../middlewares/autorizar');

// Login obrigatório para tudo
router.use(auth);

// --- Ações Exclusivas de ADMIN ---

// Criar nova rota
router.post('/', autorizar(['ADMIN']), RotaController.store); // POST http://localhost:3000/rotas -> Criar rota

// Adicionar entrega na rota
router.post('/:idRota/adicionar-entrega', autorizar(['ADMIN']), RotaController.adicionarEntrega);


// --- Ações Compartilhadas (ADMIN e MOTORISTA) ---

// Listar rotas (O motorista precisa ver as rotas dele)
router.get('/', autorizar(['ADMIN', 'MOTORISTA']), RotaController.index);

// (Futuro) Atualizar status da rota para "Iniciada" ou "Finalizada"
// router.put('/:id/status', autorizar(['ADMIN', 'MOTORISTA']), RotaController.updateStatus);

/*
// GET http://localhost:3000/rotas -> Listar rotas
router.get('/', RotaController.index);

// GET http://localhost:3000/rotas/:id -> Buscar rota por ID
router.get('/:id', RotaController.show);

// PUT http://localhost:3000/rotas/:id -> Atualizar rota
router.put('/:id', RotaController.update);

// DELETE http://localhost:3000/rotas/:id -> Remover rota
router.delete('/:id', RotaController.delete);
*/
module.exports = router;
