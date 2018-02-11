'use strict';
module.exports = (sequelize, DataTypes) => {
  var Species = sequelize.define('Species', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Species;
};
