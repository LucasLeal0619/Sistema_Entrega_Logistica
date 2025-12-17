const { Rota, Entrega } = require('../../../models');

module.exports = {
  // Listar entregas da rota
  async listarEntregas(req, res) {
    try {
      const rota = await Rota.findByPk(req.params.id, {
        include: { model: Entrega, as: 'entregas' }
      });

      if (!rota) {
        return res.status(404).json({ error: 'Rota não encontrada' });
      }

      return res.status(200).json(rota.entregas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar entregas da rota' });
    }
  },

  // Adicionar entrega à rota
  async adicionarEntrega(req, res) {
    try {
      const { id } = req.params;
      const { entrega_id } = req.body;

      const entrega = await Entrega.findByPk(entrega_id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      entrega.rota_id = id;
      await entrega.save();

      return res.status(200).json({ message: 'Entrega adicionada à rota', entrega });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao adicionar entrega' });
    }
  },

  // Remover entrega da rota
  async removerEntrega(req, res) {
    try {
      const { entrega_id } = req.params;

      const entrega = await Entrega.findByPk(entrega_id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      entrega.rota_id = null;
      await entrega.save();

      return res.status(200).json({ message: 'Entrega removida da rota' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover entrega' });
    }
  }
};
