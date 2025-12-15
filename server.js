const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Importa a conexão do Sequelize
require('dotenv').config();

const app = express();
const PORT = 3000;

// Configurações Básicas
app.use(cors()); // Permite conexões externas
app.use(express.json()); // Permite que a API entenda JSON

// Rota de Teste (Ping)
app.get('/', (req, res) => {
  res.json({ mensagem: 'Sistema de Logística API rodando com sucesso!' });
});

// -- IMPORTAÇÕES DAS ROTAS FUTURAS --
// 1. Importar o arquivo de rotas
const motoristaRoutes = require('./src/routes/motoristaRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const entregaRoutes = require('./src/routes/entregaRoutes');
const rotaRoutes = require('./src/routes/rotaRoutes');
const authRoutes = require('./src/routes/autenticacao.routes')
// 2. Usar a rota
app.use('/motoristas', motoristaRoutes);
app.use('/veiculos', veiculoRoutes); 
app.use('/entregas', entregaRoutes);
app.use('/rotas', rotaRoutes);
app.use('/auth', authRoutes);   // login
// -- FIM DAS IMPORTAÇÕES DAS ROTAS --


// Iniciar o Servidor
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  
  try {
    // Testa a conexão com o banco
    await sequelize.authenticate();
    console.log('✅ Conexão com PostgreSQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
  }
});