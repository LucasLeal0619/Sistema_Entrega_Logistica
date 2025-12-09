'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      // 1:N Veículo -> Rota
      [cite_start]// "Um veículo pode ser utilizado em várias rotas" [cite: 399]
      Veiculo.hasMany(models.Rota, {
        foreignKey: 'veiculo_id',
        as: 'rotas'
      });

      // 1:1 Veículo -> Motorista (Ativo)
      [cite_start]// "Um motorista ativo está vinculado a um único veículo ativo por vez" [cite: 348]
      Veiculo.belongsTo(models.Motorista, {
        foreignKey: 'motorista_ativo_id',
        as: 'motorista_responsavel'
      });
    }
  }
  Veiculo.init({
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    capacidade_maxima: DataTypes.INTEGER,
    km_atual: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    motorista_ativo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Veiculo',
    tableName: 'Veiculos'
  });
  return Veiculo;
};