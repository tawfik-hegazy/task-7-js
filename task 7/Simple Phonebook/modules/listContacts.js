const contacts = require('../data/contacts');

module.exports = function() {
  console.log('all contacts:');
  contacts.forEach(c => console.log(`${c.id} | ${c.name} - ${c.phone}`));
};
