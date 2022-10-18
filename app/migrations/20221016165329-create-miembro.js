'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('miembros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      ap: {
        type: Sequelize.STRING
      },
      am: {
        type: Sequelize.STRING
      },
      feNacimiento: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idEscuela: {
        type: Sequelize.INTEGER
      },
      idEquipo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'equipos',
          key: "id",
          as: "idEquipo",
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idCargo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cargos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('miembros');
  }
};