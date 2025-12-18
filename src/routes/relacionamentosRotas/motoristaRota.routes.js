const express = require('express');
const router = express.Router();
const autenticacao = require('../../middlewares/autenticacao');
const autorizar = require('../../middlewares/autorizar');

const MotoristaRotaController = require( '../../controllers/relacionamentosController/motoristaRotaController');

router.get('/motoristas/:id/rotas', autenticacao,MotoristaRotaController.listarRotas);

router.post('/motoristas/:id/rotas', autenticacao, autorizar(['ADMIN']), MotoristaRotaController.criarRota);

module.exports = router;