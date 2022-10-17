'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cargo.hasMany(models.Miembro, {
        foreignKey: 'idCargo'
      })
    }
  }
  Cargo.init({
    cargo: DataTypes.STRING,
    estado: DataTypes.CHAR(1)
  }, {
    sequelize,
    modelName: 'Cargo',
  });
  return Cargo;
};