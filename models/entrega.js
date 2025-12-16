const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entrega extends Model {
    static associate(models) {

      // N:1 Entrega -> Rota
      Entrega.belongsTo(models.Rota, {
        foreignKey: 'rota_id',
        as: 'rota'
      });

      // N:1 Entrega -> Motorista
      // 🔒 Essencial para restringir entregas por motorista
      Entrega.belongsTo(models.Motorista, {
        foreignKey: 'motorista_id',
        as: 'motorista'
      });

      // N:1 Entrega -> Cliente
      Entrega.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
        as: 'cliente'
      });
    }
  }

  Entrega.init({
    codigo_rastreio: {
      type: DataTypes.STRING,
      allowNull: false
    },

    endereco_origem: {
      type: DataTypes.STRING,
      allowNull: false
    },

    endereco_destino: {
      type: DataTypes.STRING,
      allowNull: false
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'PENDENTE'
    },

    capacidade_necessaria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    valor_frete: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    data_entrega_prevista: {
      type: DataTypes.DATE,
      allowNull: false
    },

    data_entrega_real: {
      type: DataTypes.DATE,
      allowNull: true
    },

    observacoes: {
      type: DataTypes.TEXT
    },

    rota_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rotas',
        key: 'id'
      }
    },

    // 🔑 CAMPO MAIS IMPORTANTE PARA A AUTORIZAÇÃO
    motorista_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'motoristas',
        key: 'id'
      }
    },

    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    }

  }, {
    sequelize,
    modelName: 'Entrega',
    tableName: 'entregas'
  });

  return Entrega;
};