'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // Relacionamento 1:N Cliente -> Entrega
      [cite_start]// "Um cliente pode possuir várias entregas" [cite: 408]
      Cliente.hasMany(models.Entrega, {
        foreignKey: 'cliente_id',
        as: 'entregas'
      });
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf_cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco_principal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes' // Nome exato da tabela no banco
  });
  return Cliente;
};