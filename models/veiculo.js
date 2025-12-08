'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Veículo tem muitas Rotas (histórico de uso)
  Veiculo.hasMany(models.Rota, {
    foreignKey: 'veiculo_id',
    as: 'rotas'
  });

  // Veículo pode ter um Motorista Ativo no momento
  Veiculo.belongsTo(models.Motorista, {
    foreignKey: 'motorista_ativo_id',
    as: 'motoristaAtual'
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
  });
  return Veiculo;
};