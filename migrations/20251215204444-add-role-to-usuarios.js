'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'role', {
      type: Sequelize.ENUM('ADMIN', 'MOTORISTA'),
      allowNull: false,
      defaultValue: 'MOTORISTA'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'role');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_usuarios_role";'
    );
  }
};