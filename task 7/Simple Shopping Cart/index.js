const add = require('./modules/addtocart');
const remove = require('./modules/removeFromCart');
const list = require('./modules/listcart');
const total = require('./modules/calculatetotal');

add(1);
add(2);
add(3);
list();
total();
remove(1);
list();
total();
