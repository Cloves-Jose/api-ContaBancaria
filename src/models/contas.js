'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contas.belongsTo(models.Clientes)
    }
  } Contas.init({}, {
    sequelize,
    paranoid: true
  })
  Contas.init({
    categoria: {
      type: Sequelize.ENUM,
      values: ['corrente', 'poupanca']
    },
    saldo: DataTypes.DOUBLE,
    cpf_cliente: DataTypes.STRING,
    saldo: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'Contas',
  });
  return Contas;
};