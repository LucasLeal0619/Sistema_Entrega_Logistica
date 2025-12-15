const { Rota } = require('../../models');

module.exports = {
  // Criar rota
  async store(req, res) {
    try {
      const {
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        motorista_id,
        veiculo_id
      } = req.body;

      const rota = await Rota.create({
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        motorista_id,
        veiculo_id
      });

      return res.status(201).json(rota);
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        error: 'Erro ao criar rota'
      });
    }
  },

  // Listar rotas
  async index(req, res) {
    try {
      const rotas = await Rota.findAll();
      return res.status(200).json(rotas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao listar rotas'
      });
    }
  },

  // Buscar rota por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const rota = await Rota.findByPk(id);
      if (!rota) {
        return res.status(404).json({
          error: 'Rota não encontrada'
        });
      }

      return res.json(rota);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao buscar rota'
      });
    }
  },

  // Atualizar rota
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        motorista_id,
        veiculo_id
      } = req.body;

      const rota = await Rota.findByPk(id);
      if (!rota) {
        return res.status(404).json({
          error: 'Rota não encontrada'
        });
      }

      await rota.update({
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        motorista_id,
        veiculo_id
      });

      return res.json(rota);
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        error: 'Erro ao atualizar rota'
      });
    }
  },

  // Remover rota
  async delete(req, res) {
    try {
      const { id } = req.params;

      const rota = await Rota.findByPk(id);
      if (!rota) {
        return res.status(404).json({
          error: 'Rota não encontrada'
        });
      }

      await rota.destroy();
      return res.json({
        message: 'Rota removida com sucesso'
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao remover rota'
      });
    }
  }
};
