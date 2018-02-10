'use strict';
module.exports = (sequelize, DataTypes) => {
  var Port = sequelize.define('Port', {
    name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitudeDelta: DataTypes.STRING,
    longitudeDelta: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Port;
};