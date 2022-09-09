'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VechileTrackingHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vechileId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Vechiles',
          key: 'id',
        },
        allowNull: false
      },
      location: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      logitude: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VechileTrackingHistories');
  }
};