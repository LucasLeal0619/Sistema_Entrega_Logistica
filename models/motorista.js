'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model {
    static associate(models) {
      // 1:N Motorista -> Rota
      // "Um motorista pode ter várias rotas"
      Motorista.hasMany(models.Rota, {
        foreignKey: 'motorista_id',
        as: 'rotas'
      });

      // 1:N Motorista -> Entrega
      // "Um motorista realiza várias entregas"
      Motorista.hasMany(models.Entrega, {
        foreignKey: 'motorista_id',
        as: 'entregas'
      });

      // 1:1 Motorista -> Veículo
      // A chave estrangeira 'motorista_ativo_id' está na tabela Veiculos.
      // Logo, Motorista "tem um" Veículo associado onde ele é o motorista ativo.
      Motorista.hasOne(models.Veiculo, {
        foreignKey: 'motorista_ativo_id',
        as: 'veiculo_em_uso'
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
}
  }, {
    sequelize,
    modelName: 'Motorista',
    tableName: 'Motoristas'
  });
  return Motorista;
};