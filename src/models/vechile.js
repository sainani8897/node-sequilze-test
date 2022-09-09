'use strict';
const VechileTrackingHistory = require('./vechiletrackinghistory');
module.exports = (sequelize, DataTypes) => {
  const Vechile = sequelize.define('Vechile', {
    vechileNo: DataTypes.STRING,
    currentLocation: DataTypes.STRING,
    currentLatitude: DataTypes.STRING,
    currentLongitude: DataTypes.STRING
  }, {});
  Vechile.associate = function(models) {
    // associations can be defined here
    Vechile.hasMany(models.VechileTrackingHistory, {as: 'history'})
  };
  return Vechile;
};