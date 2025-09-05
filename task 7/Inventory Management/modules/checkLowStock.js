const inventory = require('../data/inventory');

module.exports = function() {
  const low = inventory.filter(item => item.quantity < 5);
  console.log('Low Stock Items:');
  low.forEach(item => console.log(`${item.name} - Qty: ${item.quantity}`));
};
