const { Entrega, Motorista } = require('../../models');

module.exports = {

  // CRIAR ENTREGA (APENAS ADMIN)
  async store(req, res) {
    try {
      if (req.usuario.role !== 'ADMIN') {
        return res.status(403).json({ erro: 'Apenas administradores podem criar entregas' });
      }

      const entrega = await Entrega.create(req.body);
      return res.status(201).json(entrega);

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar entrega' });
    }
  },

  //  LISTAR ENTREGAS
  async index(req, res) {
    try {

      // ADMIN vê tudo
      if (req.usuario.role === 'ADMIN') {
        const entregas = await Entrega.findAll();
        return res.json(entregas);
      }

      // MOTORISTA vê apenas as próprias
      if (req.usuario.role === 'MOTORISTA') {
        const motorista = await Motorista.findOne({
          where: { usuario_id: req.usuario.id }
        });

        if (!motorista) {
          return res.status(404).json({ error: 'Motorista não encontrado' });
        }

        const entregas = await Entrega.findAll({
          where: { motorista_id: motorista.id }
        });

        return res.json(entregas);
      }

      return res.status(403).json({ error: 'Acesso negado' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar entregas' });
    }
  },

  //  BUSCAR ENTREGA POR ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const entrega = await Entrega.findByPk(id);

      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      // ADMIN pode ver qualquer entrega
      if (req.usuario.role === 'ADMIN') {
        return res.json(entrega);
      }

      // MOTORISTA só pode ver se for dele
      if (req.usuario.role === 'MOTORISTA') {
        const motorista = await Motorista.findOne({
          where: { usuario_id: req.usuario.id }
        });

        if (entrega.motorista_id !== motorista.id) {
          return res.status(403).json({ error: 'Acesso negado' });
        }

        return res.json(entrega);
      }

      return res.status(403).json({ error: 'Acesso negado' });

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar entrega' });
    }
  },

  //  ATUALIZAR ENTREGA
  async update(req, res) {
    try {
      const { id } = req.params;
      const entrega = await Entrega.findByPk(id);

      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }

      // ADMIN pode atualizar tudo
      if (req.usuario.role === 'ADMIN') {
        await entrega.update(req.body);
        return res.json(entrega);
      }

      // MOTORISTA só pode atualizar status da própria entrega
      if (req.usuario.role === 'MOTORISTA') {
        const motorista = await Motorista.findOne({
          where: { usuario_id: req.usuario.id }
        });

        if (entrega.motorista_id !== motorista.id) {
          return res.status(403).json({ error: 'Acesso negado' });
        }

        await entrega.update({
          status: req.body.status,
          data_entrega_real: req.body.data_entrega_real
        });

        return res.json(entrega);
      }

      return res.status(403).json({ error: 'Acesso negado' });

    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar entrega' });
    }
  },

  // DELETAR ENTREGA (APENAS ADMIN)
  async delete(req, res) {
    try {
      if (req.usuario.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Apenas administradores podem remover entregas' });
      }

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