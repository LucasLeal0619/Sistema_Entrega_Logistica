const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não informado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // agora salvamos mais informações do usuário
    req.usuario = {
      id: decoded.id,
      role: decoded.role
    };

    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};