const { Rota, Veiculo, Motorista, Entrega } = require('../../models');

module.exports = {
  // 1. Criar uma Rota (Vincula Motorista e Veículo)
  async store(req, res) {
    try {
      const { nome, data_rota, motorista_id, veiculo_id } = req.body;

      // Verifica se Veículo e Motorista existem
      const veiculo = await Veiculo.findByPk(veiculo_id);
      const motorista = await Motorista.findByPk(motorista_id);

      if (!veiculo || !motorista) {
        return res.status(404).json({ error: 'Motorista ou Veículo não encontrados.' });
      }

      const rota = await Rota.create({
        nome,
        data_rota,
        motorista_id,
        veiculo_id,
        status: 'planejada'
      });

      return res.status(201).json(rota);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao criar rota.' });
    }
  },

  // 2. Adicionar Entrega na Rota (COM VALIDAÇÃO DE CAPACIDADE)
  async adicionarEntrega(req, res) {
    try {
      const { idRota } = req.params; // Vem da URL
      const { idEntrega } = req.body; // Vem do JSON

      // A. Busca a Rota, o Veículo da rota e as Entregas que já estão nela
      const rota = await Rota.findByPk(idRota, {
        include: [
          { model: Veiculo, as: 'veiculo' }, 
          { model: Entrega, as: 'entregas' }
        ]
      });

      if (!rota) return res.status(404).json({ error: 'Rota não encontrada' });

      // B. Busca a Entrega que queremos adicionar
      const novaEntrega = await Entrega.findByPk(idEntrega);
      if (!novaEntrega) return res.status(404).json({ error: 'Entrega não encontrada' });

      // C. REGRA DE NEGÓCIO: Calcular soma atual
      // Somamos a capacidade de todas as entregas que já estão na rota
      const ocupacaoAtual = rota.entregas.reduce((total, entrega) => {
        return total + entrega.capacidade_necessaria;
      }, 0);

      // D. Verifica se cabe
      const capacidadeVeiculo = rota.veiculo.capacidade_maxima;
      const capacidadeNova = novaEntrega.capacidade_necessaria;

      if (ocupacaoAtual + capacidadeNova > capacidadeVeiculo) {
        return res.status(400).json({ 
          error: 'Capacidade excedida!',
          detalhes: {
            veiculo_max: capacidadeVeiculo,
            ocupacao_atual: ocupacaoAtual,
            tentativa_adicao: capacidadeNova
          }
        });
      }

      // E. Se couber, atualiza a entrega com o ID da rota
      novaEntrega.rota_id = rota.id;
      novaEntrega.status = 'em_transito'; // Atualiza status
      await novaEntrega.save();

      return res.status(200).json({ message: 'Entrega adicionada com sucesso!', entrega: novaEntrega });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno ao adicionar entrega.' });
    }
  }
};