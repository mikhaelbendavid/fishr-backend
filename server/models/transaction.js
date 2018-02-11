'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    sellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'sellerId'
    },
  },
    buyerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'buyerId'
    },
  },
    fish: {
      type: DataTypes.STRING
  },
    portId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ports',
        key: 'id',
        as: 'portId'
    },
  },
    price: DataTypes.STRING,
    weight: DataTypes.STRING,
    comments: DataTypes.TEXT
  })

  Transaction.associate = (models) => {

    Transaction.belongsTo(models.Port, {
      foreignKey: 'portId',
      as: 'portInfo'
    })
    Transaction.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'sellerInfo'
    })

    Transaction.belongsTo(models.User, {
      foreignKey: 'buyerId',
      as: 'buyerInfo'
    })
  }


  return Transaction;
};
