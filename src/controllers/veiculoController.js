const { Veiculo } = require('../../models'); // Importa o modelo

module.exports = {
  // 1. Criar um novo veículo
  async store(req, res) {
    try {
      const { placa, modelo, tipo, capacidade_maxima, km_atual, status } = req.body;

      const veiculo = await Veiculo.create({
        placa,
        modelo,
        tipo,
        capacidade_maxima,
        km_atual,
        status
      });

      return res.status(201).json(veiculo);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao cadastrar veículo. Verifique os dados.' });
    }
  },

  // 2. Listar todos os veículos
  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll();
      return res.status(200).json(veiculos);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao buscar veículos.' });
    }
  },

  // 3. Buscar veículo por ID
  async show(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado.' });
      }

      return res.status(200).json(veiculo);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao buscar veículo.' });
    }
  },

  // 4. Atualizar veículo
  async update(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado.' });
      }

      await veiculo.update(req.body);

      return res.status(200).json(veiculo);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao atualizar veículo.' });
    }
  },

  // 5. Remover veículo
  async delete(req, res) {
    try {
      const veiculo = await Veiculo.findByPk(req.params.id);

      if (!veiculo) {
        return res.status(404).json({ error: 'Veículo não encontrado.' });
      }

      await veiculo.destroy();

      return res.status(200).json({ message: 'Veículo removido com sucesso.' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao remover veículo.' });
    }
  }
};
