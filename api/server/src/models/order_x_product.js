'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_x_product = sequelize.define('order_x_product', {
    add_extra: DataTypes.STRING,
    add_type: DataTypes.STRING
  }, {});
  order_x_product.associate = function(models) {
    order_x_product.belongsTo(model.product)
    order_x_product.belongsTo(model.order)
  };
  return order_x_product;
};