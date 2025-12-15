const express = require('express');
const router = express.Router();

// Importação das rotas
const motoristaRoutes = require('./src/routes/motoristaRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const entregaRoutes = require('./src/routes/entregaRoutes');
const rotaRoutes = require('./src/routes/rotaRoutes');
const authRoutes = require('./src/routes/autenticacao.routes')
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
router.use('/auth', authRoutes);
module.exports = router;
