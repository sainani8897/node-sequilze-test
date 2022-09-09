'use strict';
const Vechile = require('./vechile');
module.exports = (sequelize, DataTypes) => {
  const VechileTrackingHistory = sequelize.define('VechileTrackingHistory', {
    location: DataTypes.STRING,
    latitude: DataTypes.STRING,
    logitude: DataTypes.STRING,
    vechileId: {
      type: DataTypes.INTEGER,
  
      references: {
        // This is a reference to another model
        model: Vechile,
  
        // This is the column name of the referenced model
        key: 'id',
  
        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        //deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      }
    },
    
  }, {});
  VechileTrackingHistory.associate = function(models) {
    // associations can be defined here
  };
  return VechileTrackingHistory;
};