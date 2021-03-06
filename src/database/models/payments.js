'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      payments.hasMany(models.orders, {
        as: "orders",
        foreignkey: "payments_id"
    });    }
  };
  payments.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};