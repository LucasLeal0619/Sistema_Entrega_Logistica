const { Entrega } = require('../../models');

module.exports = {
  async store(req, res) {
    try {
      // Cria uma entrega sem rota definida (rota_id: null)
      const entrega = await Entrega.create(req.body);
      return res.status(201).json(entrega);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar entrega' });
    }
  },
  
  async index(req, res) {
    const entregas = await Entrega.findAll();
    return res.status(200).json(entregas);
  }
};