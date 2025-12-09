const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Importa a conexão do Sequelize

const app = express();
const PORT = 3000;

// Configurações Básicas
app.use(cors()); // Permite conexões externas
app.use(express.json()); // Permite que a API entenda JSON

// Rota de Teste (Ping)
app.get('/', (req, res) => {
  res.json({ message: 'Sistema de Logística API rodando com sucesso!' });
});

// -- AQUI ENTRARÃO AS IMPORTAÇÕES DAS ROTAS FUTURAS --
// const motoristaRoutes = require('./routes/motoristaRoutes');
// app.use('/motoristas', motoristaRoutes);

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