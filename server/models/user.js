'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    seller: DataTypes.BOOLEAN
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Transaction, {
  //     foreignKey: 'userId',
  //     as: 'transactions'
  //   })
  // }
  return User;
  };
