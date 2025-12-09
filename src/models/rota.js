'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Rota tem muitas Entregas
  Rota.hasMany(models.Entrega, {
    foreignKey: 'rota_id',
    as: 'entregas'
  });
  
  // Rota pertence a um Motorista
  Rota.belongsTo(models.Motorista, {
    foreignKey: 'motorista_id',
    as: 'motorista'
  });

  // Rota usa um Veículo
  Rota.belongsTo(models.Veiculo, {
    foreignKey: 'veiculo_id',
    as: 'veiculo'
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
  });
  return Rota;
};