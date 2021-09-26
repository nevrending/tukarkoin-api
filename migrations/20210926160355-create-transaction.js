/* eslint-disable */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      bid_order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders',
            schema: process.env.DB_DATABASE
          },
          key: 'id'
        },
        allowNull: false
      },
      ask_order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders',
            schema: process.env.DB_DATABASE
          },
          key: 'id'
        },
        allowNull: false
      },
      qty: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  },
};
