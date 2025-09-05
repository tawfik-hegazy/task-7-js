const inventory = require('../data/inventory');

let nextId = 101;

module.exports = function(name, quantity) {
  inventory.push({ id: nextId++, name, quantity });
};
