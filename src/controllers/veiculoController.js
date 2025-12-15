const { Veiculo } = require('../../models');

module.exports = {
  // Criar veículo
  async store(req, res) {
    try {
      const {
        placa,
        modelo,
        tipo,
        capacidade_maxima,
        km_atual,
        status,
        motorista_ativo_id
      } = req.body;

      const veiculo = await Veiculo.create({
        placa,
        modelo,
        tipo,
        capacidade_maxima,
        km_atual,
        status,
        motorista_ativo_id
      });

      return res.status(201).json(veiculo);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar veículo' });
    }
  },

  // Listar veículos
  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll();
      return res.status(200).json(veiculos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar veículos' });
    }
  },

  // Buscar veículo por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const veiculo = await Veiculo.findByPk(id);
      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      return res.json(veiculo);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar veículo' });
    }
  },

  // Atualizar veículo
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        placa,
        modelo,
        tipo,
        capacidade_maxima,
        km_atual,
        status,
        motorista_ativo_id
      } = req.body;

      const veiculo = await Veiculo.findByPk(id);
      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      await veiculo.update({
        placa,
        modelo,
        tipo,
        capacidade_maxima,
        km_atual,
        status,
        motorista_ativo_id
      });

      return res.json(veiculo);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar veículo' });
    }
  },

  // Remover veículo
  async delete(req, res) {
    try {
      const { id } = req.params;

      const veiculo = await Veiculo.findByPk(id);
      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      await veiculo.destroy();
      return res.json({ message: 'Veículo removido com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover veículo' });
    }
  }
};
