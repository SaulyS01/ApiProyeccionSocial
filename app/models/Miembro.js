'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Miembro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Miembro.belongsTo(models.Cargo, {
        foreignKey: 'id',
        target_key: 'idCargo'
      })

      Miembro.belongsTo(models.equipos, {
        foreignKey: 'idEquipo',
        target_key: 'id'
      })
    }
  }
  Miembro.init({
    nombres: DataTypes.STRING,
    ap: DataTypes.STRING,
    am: DataTypes.STRING,
    feNacimiento: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER,
    idEscuela: DataTypes.INTEGER,
    idEquipo: DataTypes.INTEGER,
    idCargo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Miembro',
  });
  return Miembro;
};