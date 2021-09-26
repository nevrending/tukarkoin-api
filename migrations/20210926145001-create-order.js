/* eslint-disable */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            schema: process.env.DB_DATABASE
          },
          key: 'id'
        },
        allowNull: false
      },
      type: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      qty_remaining: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.STRING
      },
      status: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
