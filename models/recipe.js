'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    artist: DataTypes.STRING,
    track: DataTypes.STRING,
    album: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    instrument: DataTypes.STRING,
    sampleURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipe;
};
