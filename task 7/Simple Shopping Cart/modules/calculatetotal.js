const cart = require('../data/cart');

module.exports = function() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log('Total:', total);
};