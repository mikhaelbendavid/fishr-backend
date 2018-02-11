'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'sellerId'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'buyerId'
        }
      },
      fishId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Species',
          key: 'id',
        }
      },
      portId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ports',
          key: 'id',
        }
      },
      price: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Transactions');
  }
};
