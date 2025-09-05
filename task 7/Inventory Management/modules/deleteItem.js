const inventory = require('../data/inventory');

module.exports = function(id) {
  const i = inventory.findIndex(item => item.id === id);
  if (i !== -1) inventory.splice(i, 1);
};
