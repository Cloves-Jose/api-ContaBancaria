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
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      cpf_cliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      saldo: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      categoria: {
        type: Sequelize.ENUM,
        values: ['corrente', 'poupanca']
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