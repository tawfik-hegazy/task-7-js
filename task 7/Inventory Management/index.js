const add = require('./modules/addItem');
const remove = require('./modules/deleteItem');
const list = require('./modules/listInventory');
const checkLow = require('./modules/checkLowStock');

add('Mouse', 3);


list();

checkLow();

const inventory = require('./data/inventory');
remove(inventory[0].id);