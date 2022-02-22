'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clientes.hasOne(models.Contas, {
        foreignKey: 'cliente_id'
      })
    }
  }
  Clientes.init({
    nome: DataTypes.STRING,
    dataNascimento: DataTypes.STRING,
    cpf: DataTypes.STRING,
    profissao: DataTypes.STRING,
    renda: DataTypes.DOUBLE
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Clientes',
  });
  return Clientes;
};