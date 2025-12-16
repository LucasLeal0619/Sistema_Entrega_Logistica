const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/veiculoController');

// Importar os seguranças
const auth = require('../middlewares/autenticacao');
const autorizar = require('../middlewares/autorizar');

// 1. Bloqueia tudo: Ninguém entra sem Token válido
router.use(auth);

// 2. Rotas restritas apenas para ADMIN (Gestores)
// Criar, Atualizar e Deletar -> Só ADMIN
router.post('/', autorizar(['ADMIN']), VeiculoController.store); // POST http://localhost:3000/veiculos -> Cria veículo
router.put('/:id', autorizar(['ADMIN']), VeiculoController.update); // PUT http://localhost:3000/veiculos/:id -> Atualiza veículo
router.delete('/:id', autorizar(['ADMIN']), VeiculoController.delete); // DELETE http://localhost:3000/veiculos/:id -> Remove veículo

// 3. Rotas de Leitura (Pode ser aberto a Motoristas também, se necessário)
// Se quiser que motoristas vejam os carros, use ['ADMIN', 'MOTORISTA']
router.get('/', autorizar(['ADMIN']), VeiculoController.index); // GET http://localhost:3000/veiculos -> Lista veículos
router.get('/:id', autorizar(['ADMIN']), VeiculoController.show); // GET http://localhost:3000/veiculos/:id -> Busca veículo por ID

module.exports = router;

