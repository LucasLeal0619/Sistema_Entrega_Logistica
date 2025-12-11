const { Motorista } = require('../../models'); // Importa o modelo

module.exports = {
  // 1. Criar um novo motorista
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
      return res.status(400).json({
        error: 'Erro ao cadastrar motorista. Verifique os dados.'
      });
    }
  },

  // 2. Listar todos os motoristas
  async index(req, res) {
    try {
      const motoristas = await Motorista.findAll();
      return res.status(200).json(motoristas);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao buscar motoristas.' });
    }
  },

  // 3. Buscar motorista por ID
  async show(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);

      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado.' });
      }

      return res.status(200).json(motorista);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao buscar motorista.' });
    }
  },

  // 4. Atualizar motorista
  async update(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);

      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado.' });
      }

      await motorista.update(req.body);

      return res.status(200).json(motorista);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao atualizar motorista.' });
    }
  },

  // 5. Remover motorista
  async delete(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);

      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado.' });
      }

      await motorista.destroy();

      return res.status(200).json({ message: 'Motorista removido com sucesso.' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao remover motorista.' });
    }
  }
};
