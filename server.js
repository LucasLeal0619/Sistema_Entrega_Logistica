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

// -- IMPORTAÇÕES DAS ROTAS FUTURAS --
// 1. Importar o arquivo de rotas
const motoristaRoutes = require('./src/routes/motoristaRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const entregaRoutes = require('./src/routes/entregaRoutes');
const rotaRoutes = require('./src/routes/rotaRoutes');
const authRoutes = require('./src/routes/autenticacao.routes')
const clienteRoutes = require('./src/routes/clienteRoutes')
// 2. Usar a rota
app.use('/motoristas', motoristaRoutes);
app.use('/veiculos', veiculoRoutes); 
app.use('/entregas', entregaRoutes);
app.use('/rotas', rotaRoutes);
app.use('/auth', authRoutes);   // login
app.use('/cliente,', clienteRoutes)
// -- FIM DAS IMPORTAÇÕES DAS ROTAS --

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
