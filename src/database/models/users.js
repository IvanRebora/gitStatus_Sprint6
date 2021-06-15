'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsTo(models.adresses);  
      users.hasMany(models.orders, {
        as: "orders",
        foreignkey: "users_id"
    });
    }
  };
  users.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};