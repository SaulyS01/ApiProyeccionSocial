'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Equipo.hasMany(models.Miembro, {
        foreignKey: 'idEquipo', as: 'miembros',
      })
    }
  }
  Equipo.init({
    equipo: DataTypes.STRING(200),
    estado: DataTypes.CHAR(1)
  }, {
    sequelize,
    modelName: 'equipos',
  });
  return Equipo;
};