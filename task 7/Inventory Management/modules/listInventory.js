const inventory = require('../data/inventory');

module.exports = function() {
  console.log('Inventory:');
  inventory.forEach(item => console.log(`${item.id} | ${item.name} - Qty: ${item.quantity}`));
};
