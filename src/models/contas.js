'use strict';
const {
  Model
} = require('sequelize');
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
  } Post.init({}, {
    sequelize,
    paranoid: true
  })
  Contas.init({
    saldo: DataTypes.DOUBLE,
    cpf_cliente: DataTypes.STRING,
    saldo: DataTypes.DOUBLE,
    categoria: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Contas',
  });
  return Contas;
};