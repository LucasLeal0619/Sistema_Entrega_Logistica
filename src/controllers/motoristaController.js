const { Motorista } = require('../../models');

module.exports = {
  // Criar motorista
  async store(req, res) {
    try {
      const { nome, cpf, cnh, telefone, status } = req.body;

      const motorista = await Motorista.create({
        nome,
        cpf,
        cnh,
        telefone,
        status
      });

      return res.status(201).json(motorista);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao cadastrar motorista' });
    }
  },

  // Listar motoristas
  async index(req, res) {
    try {
      const motoristas = await Motorista.findAll();
      return res.status(200).json(motoristas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar motoristas' });
    }
  },

  // Buscar motorista por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const motorista = await Motorista.findByPk(id);
      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      return res.json(motorista);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar motorista' });
    }
  },

  // Atualizar motorista
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, cpf, cnh, telefone, status } = req.body;

      const motorista = await Motorista.findByPk(id);
      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      await motorista.update({
        nome,
        cpf,
        cnh,
        telefone,
        status
      });

      return res.json(motorista);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar motorista' });
    }
  },

  // Remover motorista
  async delete(req, res) {
    try {
      const { id } = req.params;

      const motorista = await Motorista.findByPk(id);
      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      await motorista.destroy();
      return res.json({ message: 'Motorista removido com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover motorista' });
    }
  }
};
