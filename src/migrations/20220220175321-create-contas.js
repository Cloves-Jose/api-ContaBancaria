'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clientes', key: 'id'}
      },
      saldo: {
        type: Sequelize.DOUBLE
      },
      cpf_cliente: {
        type: Sequelize.STRING
      },
      saldo: {
        type: Sequelize.DOUBLE
      },
      categoria: {
        type: Sequelize.ENUM(['corrente', 'poupanca'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contas');
  }
};