'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productDefect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically. 
     */
    static associate(models) {
      // define association here
      productDefect.belongsTo(models.product);
      productDefect.belongsTo(models.defect);
    }
  }
  productDefect.init({
    productId: DataTypes.INTEGER,
    defectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productDefect',
  });
  return productDefect;
};