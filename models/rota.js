'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rota extends Model {
    static associate(models) {
      // N:1 Rota -> Motorista
      // "Cada rota pertence a um único motorista"
      Rota.belongsTo(models.Motorista, {
        foreignKey: 'motorista_id',
        as: 'motorista'
      });

      // N:1 Rota -> Veículo
      // "Cada rota utiliza um único veículo"
      Rota.belongsTo(models.Veiculo, {
        foreignKey: 'veiculo_id',
        as: 'veiculo'
      });

      // 1:N Rota -> Entrega
      // "Uma rota contém várias entregas"
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