const cart = require('../data/cart');

module.exports = function(productId) {
  const i = cart.findIndex(p => p.id === productId);
  if (i !== -1) cart.splice(i, 1);
};
