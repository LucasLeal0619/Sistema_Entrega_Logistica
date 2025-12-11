const { Cliente } = require('../models');


class ClienteController {
async create(req, res) {
try {
const cliente = await Cliente.create(req.body);
return res.status(201).json(cliente);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erro ao criar cliente' });
}
}


async list(req, res) {
try {
const clientes = await Cliente.findAll();
return res.json(clientes);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erro ao listar clientes' });
}
}


async get(req, res) {
try {
const cliente = await Cliente.findByPk(req.params.id);
if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
return res.json(cliente);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erro ao buscar cliente' });
}
}


async update(req, res) {
try {
const cliente = await Cliente.findByPk(req.params.id);
if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
await cliente.update(req.body);
return res.json(cliente);
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erro ao atualizar cliente' });
}
}


async delete(req, res) {
try {
const cliente = await Cliente.findByPk(req.params.id);
if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
await cliente.destroy();
return res.json({ message: 'Cliente removido' });
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Erro ao remover cliente' });
}
}
}


module.exports = new ClienteController();