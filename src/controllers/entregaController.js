const { Entrega } = require('../../models');

module.exports = {
  // Criar entrega
  async store(req, res) {
    try {
      const {
        codigo_rastreio,
        endereco_origem,
        endereco_destino,
        status,
        capacidade_necessaria,
        valor_frete,
        data_entrega_prevista,
        data_entrega_real,
        observacoes,
        rota_id,
        motorista_id,
        cliente_id
      } = req.body;

      const entrega = await Entrega.create({
        codigo_rastreio,
        endereco_origem,
        endereco_destino,
        status,
        capacidade_necessaria,
        valor_frete,
        data_entrega_prevista,
        data_entrega_real,
        observacoes,
        rota_id,
        motorista_id,
        cliente_id
      });

      return res.status(201).json(entrega);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar entrega' });
    }
  },

  // Listar entregas
  async index(req, res) {
    try {
      const entregas = await Entrega.findAll();
      return res.status(200).json(entregas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar entregas' });
    }
  },

  // Buscar entrega por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const entrega = await Entrega.findByPk(id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      return res.json(entrega);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar entrega' });
    }
  },

  // Atualizar entrega
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        codigo_rastreio,
        endereco_origem,
        endereco_destino,
        status,
        capacidade_necessaria,
        valor_frete,
        data_entrega_prevista,
        data_entrega_real,
        observacoes,
        rota_id,
        motorista_id,
        cliente_id
      } = req.body;

      const entrega = await Entrega.findByPk(id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      await entrega.update({
        codigo_rastreio,
        endereco_origem,
        endereco_destino,
        status,
        capacidade_necessaria,
        valor_frete,
        data_entrega_prevista,
        data_entrega_real,
        observacoes,
        rota_id,
        motorista_id,
        cliente_id
      });

      return res.json(entrega);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar entrega' });
    }
  },

  // Remover entrega
  async delete(req, res) {
    try {
      const { id } = req.params;

      const entrega = await Entrega.findByPk(id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      await entrega.destroy();
      return res.json({ message: 'Entrega removida com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover entrega' });
    }
  }
};
