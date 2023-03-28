'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class defect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      defect.belongsToMany(models.product, { through: models.productDefect });
    }
  }
  defect.init({
    defect_name: DataTypes.STRING,
    type: DataTypes.STRING,
    area: DataTypes.STRING,
    suggestion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'defect',
  });
  return defect;
};