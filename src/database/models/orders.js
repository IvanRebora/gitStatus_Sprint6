'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.users);
      orders.hasMany(models.orderdetails, {
        as: "orderdetails",
        foreignKey: "orders_id"
    });
      orders.belongsTo(models.shippings);
      orders.belongsTo(models.state);
      orders.belongsTo(models.payments);
      }
  };
  orders.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};