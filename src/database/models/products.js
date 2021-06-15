'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        products.belongsTo(models.categories);
        products.belongsTo(models.manufacturer);
        products.hasMany(models.images, {
          as: "images",
          foreignKey: "products_id"
      });
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });





  return products;
};