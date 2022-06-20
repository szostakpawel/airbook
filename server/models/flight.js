'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flight.init({
    plane: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    distance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};