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
      Contas.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
    }
  } 
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
    paranoid: true,
    modelName: 'Contas',
  });
  return Contas;
};