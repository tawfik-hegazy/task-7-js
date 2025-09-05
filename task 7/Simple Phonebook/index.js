const add = require('./modules/addContact');
const remove = require('./modules/removeContact');
const search = require('./modules/searchContact');
const list = require('./modules/listContacts');

add('ahmed', '01122334455');
add('waleed', '010022334455');
add('ashraf', '0120000000');

list();

search('ahmed');

const contacts = require('./data/contacts');
remove(contacts[0].id);

list();
