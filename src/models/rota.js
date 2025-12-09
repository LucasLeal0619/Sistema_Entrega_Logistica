'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rota extends Model {
    static associate(models) {
      // N:1 Rota -> Motorista
      [cite_start]// "Cada rota pertence a um único motorista" [cite: 397]
      Rota.belongsTo(models.Motorista, {
        foreignKey: 'motorista_id',
        as: 'motorista'
      });

      // N:1 Rota -> Veículo
      [cite_start]// "Cada rota utiliza um único veículo" [cite: 400]
      Rota.belongsTo(models.Veiculo, {
        foreignKey: 'veiculo_id',
        as: 'veiculo'
      });

      // 1:N Rota -> Entrega
      [cite_start]// "Uma rota contém várias entregas" [cite: 403]
      Rota.hasMany(models.Entrega, {
        foreignKey: 'rota_id',
        as: 'entregas'
      });
    }
  }
  Rota.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data_rota: DataTypes.DATE,
    status: DataTypes.STRING,
    km_total_estimado: DataTypes.DECIMAL,
    tempo_estimado: DataTypes.STRING,
    motorista_id: DataTypes.INTEGER,
    veiculo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rota',
    tableName: 'Rotas'
  });
  return Rota;
};