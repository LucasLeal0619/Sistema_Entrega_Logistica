const { Veiculo, Rota } = require('../../models');

module.exports = {
  // Listar rotas de um veículo
  async listarRotas(req, res) {
    try {
      const { id } = req.params;

      const veiculo = await Veiculo.findByPk(id, {
        include: {
          model: Rota,
          as: 'rotas'
        }
      });

      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      return res.status(200).json(veiculo.rotas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar rotas do veículo' });
    }
  },

  // Histórico do veículo (rotas concluídas)
  async historico(req, res) {
    try {
      const { id } = req.params;

      const veiculo = await Veiculo.findByPk(id, {
        include: {
          model: Rota,
          as: 'rotas',
          where: { status: 'concluida' },
          required: false
        }
      });

      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      return res.status(200).json({
        veiculo_id: veiculo.id,
        km_atual: veiculo.km_atual,
        rotas: veiculo.rotas
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar histórico do veículo' });
    }
  }
};
