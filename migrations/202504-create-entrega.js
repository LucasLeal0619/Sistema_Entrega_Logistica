'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entregas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo_rastreio: {
        type: Sequelize.STRING
      },
      endereco_origem: {
        type: Sequelize.STRING
      },
      endereco_destino: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      capacidade_necessaria: {
        type: Sequelize.INTEGER
      },
      valor_frete: {
        type: Sequelize.DECIMAL
      },
      data_entrega_prevista: {
        type: Sequelize.DATE
      },
      data_entrega_real: {
        type: Sequelize.DATE
      },
      observacoes: {
        type: Sequelize.TEXT
      },
      rota_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Rotas', // Isso exige que a tabela anterior se chame 'Rotas'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      motorista_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Permite que a entrega seja criada sem motorista inicialmente
        references: {
          model: 'Motoristas', // Nome da tabela de referência
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Se o motorista for excluído, a entrega perde o vínculo mas não é apagada
      },
      cliente_id: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
        model: 'Clientes',
        key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entregas');
  }
};