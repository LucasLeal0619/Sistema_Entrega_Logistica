const { Motorista } = require('../../models'); // Importa o modelo

module.exports = {
  // 1. Criar um novo motorista
  async store(req, res) {
    try {
      const { nome, cpf, cnh, telefone, status } = req.body;
      
      const motorista = await Motorista.create({ nome, cpf, cnh, telefone, status });
      
      return res.status(201).json(motorista);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao cadastrar motorista. Verifique os dados.' });
    }
  },

  // 2. Listar todos os motoristas
  async index(req, res) {
    try {
      const motoristas = await Motorista.findAll();
      return res.status(200).json(motoristas);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar motoristas.' });
    }
  }
};