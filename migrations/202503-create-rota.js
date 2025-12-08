'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      data_rota: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      km_total_estimado: {
        type: Sequelize.DECIMAL
      },
      tempo_estimado: {
        type: Sequelize.STRING
      },
      motorista_id: {
        type: Sequelize.INTEGER,
        allowNull: false, // Obrigatório: Rota tem de ter motorista
        references: {
          model: 'Motoristas', // Nome da tabela alvo
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // Se apagar o motorista, apaga a rota (ou mude para RESTRICT)
      },
      veiculo_id: {
        type: Sequelize.INTEGER,
        allowNull: false, // Obrigatório: Rota tem de ter veículo
        references: {
          model: 'Veiculos', // Nome da tabela alvo
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Rotas');
  }
};