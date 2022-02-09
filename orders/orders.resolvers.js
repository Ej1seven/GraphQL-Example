const orderModel = require('./orders.model');

module.exports = {
  Query: {
    orders: () => {
      return orderModel.getAllOrders();
    },
  },
};
