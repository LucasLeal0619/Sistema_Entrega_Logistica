const { Motorista, Rota } = require('../../../models');

module.exports = {

  // GET /api/motoristas/:id/rotas
  async listarRotas(req, res) {
    try {
      const { id } = req.params;

      const motorista = await Motorista.findByPk(id, {
        include: {
          model: Rota,
          as: 'rotas'
        }
      });

      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      return res.status(200).json(motorista.rotas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar rotas do motorista' });
    }
  },

  // POST /api/motoristas/:id/rotas
  async criarRota(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        veiculo_id
      } = req.body;

      const motorista = await Motorista.findByPk(id);

      if (!motorista) {
        return res.status(404).json({ error: 'Motorista não encontrado' });
      }

      const rota = await Rota.create({
        nome,
        descricao,
        data_rota,
        status,
        km_total_estimado,
        tempo_estimado,
        motorista_id: id,
        veiculo_id
      });

      return res.status(201).json(rota);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao criar rota para o motorista' });
    }
  }

};

