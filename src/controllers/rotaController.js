const { Rota, Veiculo, Entrega } = require('../../models'); //Adicionei Veiculo e Entrega

module.exports = {
  // 1. Criar rota (Mantive os seus campos)
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

  // 2. FUNÇÃO NOVA: Adicionar Entrega com Validação de Capacidade
  // (Esta era a peça que faltava e causava o erro)
  async adicionarEntrega(req, res) {
    try {
      const { idRota } = req.params; 
      const { idEntrega } = req.body; 

      // Busca Rota + Veículo + Entregas atuais
      const rota = await Rota.findByPk(idRota, {
        include: [
          { model: Veiculo, as: 'veiculo' }, 
          { model: Entrega, as: 'entregas' }
        ]
      });

      if (!rota) return res.status(404).json({ error: 'Rota não encontrada' });
      if (!rota.veiculo) return res.status(400).json({ error: 'Rota sem veículo atribuído' });

      // Busca a Entrega Nova
      const novaEntrega = await Entrega.findByPk(idEntrega);
      if (!novaEntrega) return res.status(404).json({ error: 'Entrega não encontrada' });

      // CÁLCULO DA CAPACIDADE
      const entregasAtuais = rota.entregas || [];
      const ocupacaoAtual = entregasAtuais.reduce((total, ent) => total + Number(ent.capacidade_necessaria), 0);
      
      const capacidadeVeiculo = Number(rota.veiculo.capacidade_maxima);
      const capacidadeNova = Number(novaEntrega.capacidade_necessaria);

      if (ocupacaoAtual + capacidadeNova > capacidadeVeiculo) {
        return res.status(400).json({ 
          error: 'Capacidade excedida!',
          detalhes: {
            capacidade_veiculo: capacidadeVeiculo,
            ocupacao_atual: ocupacaoAtual,
            nova_entrega: capacidadeNova
          }
        });
      }

      // Se couber, atualiza a entrega
      novaEntrega.rota_id = rota.id;
      novaEntrega.status = 'em_transito';
      await novaEntrega.save();

      return res.status(200).json({ message: 'Entrega adicionada!', entrega: novaEntrega });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao adicionar entrega na rota' });
    }
  },

  // 3. Listar rotas
  async index(req, res) {
    try {
      const rotas = await Rota.findAll({
        include: ['veiculo', 'entregas'] // Melhorar a listagem para mostrar detalhes
      });
      return res.status(200).json(rotas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao listar rotas'
      });
    }
  },

  // 4. Buscar rota por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const rota = await Rota.findByPk(id, {
        include: ['veiculo', 'entregas'] // Inclui detalhes ao ver uma rota específica
      });
      
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

  // 5. Atualizar rota
  async update(req, res) {
    try {
      const { id } = req.params;
      // Mantive todos os seus campos aqui também
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

  // 6. Remover rota
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