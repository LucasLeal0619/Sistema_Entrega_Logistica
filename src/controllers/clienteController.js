const { Cliente } = require('../../models');

module.exports = {
  // Criar cliente
  async store(req, res) {
    try {
      const {
        nome,
        cpf_cnpj,
        email,
        telefone,
        endereco_principal
      } = req.body;

      const cliente = await Cliente.create({
        nome,
        cpf_cnpj,
        email,
        telefone,
        endereco_principal
      });

      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar cliente' });
    }
  },

  // Listar clientes
  async index(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar clientes' });
    }
  },

  // Buscar cliente por ID
  async show(req, res) {
    try {
      const { id } = req.params;

      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
  },

  // Atualizar cliente
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        cpf_cnpj,
        email,
        telefone,
        endereco_principal
      } = req.body;

      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      await cliente.update({
        nome,
        cpf_cnpj,
        email,
        telefone,
        endereco_principal
      });

      return res.json(cliente);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar cliente' });
    }
  },

  // Remover cliente
  async delete(req, res) {
    try {
      const { id } = req.params;

      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      await cliente.destroy();
      return res.json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao remover cliente' });
    }
  }
};
