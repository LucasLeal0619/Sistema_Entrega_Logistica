const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

module.exports = {

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
      }

      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }

      const senhaValida = await usuario.verificarSenha(senha);

      if (!senhaValida) {
        return res.status(401).json({ erro: 'Senha inválida' });
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      );

      return res.json({
        usuario: {
          id: usuario.id,
          email: usuario.email
        },
        token
      });

    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao realizar login' });
    }
  }

};
