const { Motorista, Entrega } = require('../../models');

module.exports = {

  // GET /motoristas/:id/entregas
  async listarEntregas(req, res) {
    try {
      const { id } = req.params;

      const entregas = await Entrega.findAll({
        where: { motorista_id: id }
      });

      return res.status(200).json(entregas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao listar entregas do motorista' });
    }
  },

  // POST /entregas/:id/atribuir-motorista
  async atribuirMotorista(req, res) {
    try {
      const { id } = req.params;
      const { motorista_id } = req.body;

      const entrega = await Entrega.findByPk(id);
      if (!entrega) {
        return res.status(404).json({ erro: 'Entrega não encontrada' });
      }

      const motorista = await Motorista.findByPk(motorista_id);
      if (!motorista) {
        return res.status(404).json({ erro: 'Motorista não encontrado' });
      }

      entrega.motorista_id = motorista_id;
      await entrega.save();

      return res.status(200).json(entrega);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao atribuir motorista' });
    }
  },

  // GET /motoristas/:id/historico
  async historico(req, res) {
    try {
      const { id } = req.params;

      const entregas = await Entrega.findAll({
        where: {
          motorista_id: id,
          status: 'entregue'
        }
      });

      return res.status(200).json(entregas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao buscar histórico' });
    }
  }

};
