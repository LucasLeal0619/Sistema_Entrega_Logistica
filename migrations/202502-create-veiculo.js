'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      capacidade_maxima: {
        type: Sequelize.INTEGER
      },
      km_atual: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      motorista_ativo_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // IMPORTANTE: Pode ser nulo (veículo parado na garagem)
        references: {
          model: 'Motoristas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Se o motorista for apagado, o veículo fica "sem motorista"
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
    await queryInterface.dropTable('Veiculos');
  }
};