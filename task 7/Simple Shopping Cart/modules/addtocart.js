var products = require('../data/products');
const cart = require('../data/cart');

module.exports = function(productId) {
  var item = products.find(p => p.id === productId);
  if (item) cart.push(item);
};