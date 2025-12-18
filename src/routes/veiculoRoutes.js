const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/veiculoController');

// Importar os seguranças
const autorizar = require('../middlewares/autorizar');
const autenticacao = require('../middlewares/autenticacao');

// 2. Rotas restritas apenas para ADMIN (Gestores)
router.post('/', autenticacao, autorizar(['ADMIN']), VeiculoController.store); // POST http://localhost:3000/veiculos -> Cria veículo
router.put('/:id', autenticacao, autorizar(['ADMIN']), VeiculoController.update); // PUT http://localhost:3000/veiculos/:id -> Atualiza veículo
router.delete('/:id', autenticacao, autorizar(['ADMIN']), VeiculoController.delete); // DELETE http://localhost:3000/veiculos/:id -> Remove veículo

// 3. Rotas de Leitura 
router.get('/', autorizar(['ADMIN']), VeiculoController.index); // GET http://localhost:3000/veiculos -> Lista veículos
router.get('/:id', autorizar(['ADMIN']), VeiculoController.show); // GET http://localhost:3000/veiculos/:id -> Busca veículo por ID

module.exports = router;

