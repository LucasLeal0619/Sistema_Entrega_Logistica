const { Motorista, Veiculo } = require('../../../models');

module.exports = {

  // PUT /api/motoristas/:id/atribuir-veiculo
  async atribuirVeiculo(req, res) {
    try {
      const { id } = req.params; // motorista
      const { veiculo_id } = req.body;

      const motorista = await Motorista.findByPk(id);
      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      const veiculo = await Veiculo.findByPk(veiculo_id);
      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado' });
      }

      if (veiculo.status !== 'disponivel') {
        return res.status(400).json({ error: 'Veículo não está disponível' });
      }

      // vínculo 1:1
      await motorista.update({ veiculo_id: veiculo.id });
      await veiculo.update({ status: 'em_uso' });

      return res.json({ message: 'Veículo atribuído com sucesso' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atribuir veículo' });
    }
  },

  // PUT /api/motoristas/:id/liberar-veiculo
  async liberarVeiculo(req, res) {
    try {
      const { id } = req.params;

      const motorista = await Motorista.findByPk(id);
      if (!motorista || !motorista.veiculo_id) {
        return res.status(404).json({ error: 'Motorista sem veículo vinculado' });
      }

      const veiculo = await Veiculo.findByPk(motorista.veiculo_id);

      await motorista.update({ veiculo_id: null });
      await veiculo.update({ status: 'disponivel' });

      return res.json({ message: 'Veículo liberado com sucesso' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao liberar veículo' });
    }
  },

  // GET /api/veiculos/disponiveis
  async listarDisponiveis(req, res) {
    try {
      const veiculos = await Veiculo.findAll({
        where: { status: 'disponivel' }
      });

      return res.json(veiculos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar veículos disponíveis' });
    }
  }

};
