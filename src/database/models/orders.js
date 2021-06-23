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
        as: "orderDetails",
        foreignKey: "orders_id"
    });
      orders.belongsTo(models.shippings);
      orders.belongsTo(models.states);
      orders.belongsTo(models.payments);
      }
  };
  orders.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    shippings_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};