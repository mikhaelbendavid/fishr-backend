'use strict';
module.exports = (sequelize, DataTypes) => {
  const Port = sequelize.define('Port', {
    name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitudeDelta: DataTypes.STRING,
    longitudeDelta: DataTypes.STRING
  })

  Port.associate = (models) => {
    Port.hasMany(models.Transaction, {
      foreignKey: 'portId',
      as: 'transactionInfo'
    })
  }
  return Port;
};
