const express = require('express');
const router = express.Router();

// Importação das rotas
const clienteRoutes = require('./clienteRoutes');
const motoristaRoutes = require('./motoristaRoutes');
const veiculoRoutes = require('./veiculoRoutes');
const entregaRoutes = require('./entregaRoutes');
const rotaRoutes = require('./rotaRoutes'); 
const autenticacao = require('./autenticacao.routes')
// Rota raiz da API
router.get('/', (req, res) => {
  res.json({
    message: 'API do Sistema de Entrega Logística',
    version: '1.0.0'
  });
});

// Registro das rotas
router.use('/clientes', clienteRoutes);
router.use('/motoristas', motoristaRoutes);
router.use('/veiculos', veiculoRoutes);
router.use('/entregas', entregaRoutes);
router.use('/rotas', rotaRoutes);
router.use('/autenticacao', autenticacao);
module.exports = router;
