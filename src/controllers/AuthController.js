const jwt = require('jsonwebtoken');
const { Usuario } = require('../../models');
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
        { id: usuario.id, role: usuario.role, email: usuario.email },
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
  },

async register(req, res) {
  const { email, senha, role } = req.body;

  // validação básica
  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  // verifica se já existe
  const usuarioExiste = await Usuario.findOne({ where: { email } });
  if (usuarioExiste) {
    return res.status(400).json({ erro: 'Usuário já existe' });
  }

  // cria usuário
  const usuario = await Usuario.create({
    email,
    senha,
    role: role || 'MOTORISTA'
  });

  return res.status(201).json({
    id: usuario.id,
    email: usuario.email,
    role: usuario.role
  });
  }  
};
