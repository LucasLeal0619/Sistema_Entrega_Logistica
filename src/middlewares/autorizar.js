module.exports = (perfisPermitidos) => {
  return (req, res, next) => {
    const { role } = req.usuario;

    if (!perfisPermitidos.includes(role)) {
      return res.status(403).json({
        erro: 'Acesso negado'
      });
    }

    next();
  };
};