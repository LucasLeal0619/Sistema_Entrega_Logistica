const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error('Erro não tratado:', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body
  });

  // errp de validacao com o postegre
  if (err.code === '23505') {
    return res.status(400).json({
      error: 'Registro duplicado',
      details: err.detail
    });
  }

  if (err.code === '23503') {
    return res.status(400).json({
      error: 'Referência inválida',
      details: err.detail
    });
  }

  // erro na sintaxe postegre
  if (err.code === '42601') {
    return res.status(500).json({
      error: 'Erro no banco de dados'
    });
  }

  // erro generico
  res.status(err.statusCode || 500).json({
    error: err.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;