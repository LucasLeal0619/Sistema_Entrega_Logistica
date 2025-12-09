'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entrega extends Model {
    static associate(models) {
      // N:1 Entrega -> Rota
      [cite_start]// "Cada entrega pertence a no máximo uma rota" [cite: 404]
      Entrega.belongsTo(models.Rota, {
        foreignKey: 'rota_id',
        as: 'rota'
      });

      // N:1 Entrega -> Motorista
      [cite_start]// "Uma entrega pode ter um motorista atribuído" [cite: 394]
      Entrega.belongsTo(models.Motorista, {
        foreignKey: 'motorista_id',
        as: 'motorista'
      });

      // N:1 Entrega -> Cliente
      [cite_start]// "Cada entrega possui apenas um cliente" [cite: 410]
      Entrega.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
        as: 'cliente'
      });
    }
  }
  Entrega.init({
    codigo_rastreio: DataTypes.STRING,
    endereco_origem: DataTypes.STRING,
    endereco_destino: DataTypes.STRING,
    status: DataTypes.STRING,
    capacidade_necessaria: DataTypes.INTEGER,
    valor_frete: DataTypes.DECIMAL,
    data_entrega_prevista: DataTypes.DATE,
    data_entrega_real: DataTypes.DATE,
    observacoes: DataTypes.TEXT,
    rota_id: DataTypes.INTEGER,
    motorista_id: DataTypes.INTEGER,
    cliente_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entrega',
    tableName: 'Entregas'
  });
  return Entrega;
};