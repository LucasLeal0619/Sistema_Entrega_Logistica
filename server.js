const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const routes = require('./src/routes');

const app = express();
const PORT = 3000;

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'Sistema de Logística API rodando com sucesso!' });
});

// Rotas da aplicação
app.use(routes);

// Inicialização do servidor
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com PostgreSQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar no banco de dados:', error);
  }
});
