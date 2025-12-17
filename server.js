require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota base
app.get('/', (req, res) => {
  res.json({
    message: 'Sistema de Logística API',
    status: 'online'
  });
});

// Rotas principais
const motoristaRoutes = require('./src/routes/motoristaRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const entregaRoutes = require('./src/routes/entregaRoutes');
const rotaRoutes = require('./src/routes/rotaRoutes');
const authRoutes = require('./src/routes/autenticacao.routes');
const clienteRoutes = require('./src/routes/clienteRoutes');

// Rotas de relacionamento
const motoristaEntregaRoutes = require('./src/routes/relacionamentosRotas/motoristaEntrega.routes');
const motoristaRotaRoutes = require('./src/routes/relacionamentosRotas/motoristaRota.routes');
const veiculoRotaRoutes = require('./src/routes/relacionamentosRotas/veiculoRota.routes');
const motoristaVeiculoRoutes = require('./src/routes/relacionamentosRotas/motoristaVeiculo.routes');
const rotaEntregaRoutes = require('./src/routes/relacionamentosRotas/rotaEntrega.routes');

// Uso das rotas
app.use('/motoristas', motoristaRoutes);
app.use('/veiculos', veiculoRoutes);
app.use('/entregas', entregaRoutes);
app.use('/rotas', rotaRoutes);
app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);

// Relacionamentos
app.use('/api', motoristaEntregaRoutes);
app.use('/api', motoristaRotaRoutes);
app.use('/api', veiculoRotaRoutes);
app.use('/api', motoristaVeiculoRoutes);
app.use('/api', rotaEntregaRoutes);

// Inicia servidor
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('✅ Banco conectado');
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error);
  }
});