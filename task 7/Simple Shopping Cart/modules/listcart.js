const cart = require('../data/cart');

module.exports = function () {

  console.log('Cart Items:');
  cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price}`);
  });
};
