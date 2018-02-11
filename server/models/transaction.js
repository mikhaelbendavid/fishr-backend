'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    sellerId: DataTypes.STRING,
    buyerId: DataTypes.STRING,
    fishId: DataTypes.STRING,
    portId: DataTypes.STRING,
    price: DataTypes.STRING,
    weight: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Transaction;
};