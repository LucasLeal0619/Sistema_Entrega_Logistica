'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Motorista tem muitas Rotas (histórico)
  Motorista.hasMany(models.Rota, {
    foreignKey: 'motorista_id',
    as: 'rotas'
  });

  // Motorista pode estar vinculado a um Veículo atual (1:1)
  Motorista.hasOne(models.Veiculo, {
    foreignKey: 'motorista_ativo_id',
    as: 'veiculoAtual'
  });
    }
  }
  Motorista.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cnh: {
  type: DataTypes.ENUM('B', 'C', 'D', 'E'),
  allowNull: false
},
    telefone: DataTypes.STRING,
    status: {
  type: DataTypes.ENUM('ativo', 'inativo', 'em_rota', 'disponivel'),
  defaultValue: 'disponivel'
},
    veiculo_ativo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Motorista',
  });
  return Motorista;
};