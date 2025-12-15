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

// Importa o index das rotas
const routes = require('./src/routes');
app.use('/api', routes);

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
