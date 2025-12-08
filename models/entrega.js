'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Entrega pertence a uma Rota
  Entrega.belongsTo(models.Rota, {
    foreignKey: 'rota_id',
    as: 'rota'
  });
  // Entrega pertence a um Cliente
  // Entrega.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
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
    cliente_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entrega',
  });
  return Entrega;
};