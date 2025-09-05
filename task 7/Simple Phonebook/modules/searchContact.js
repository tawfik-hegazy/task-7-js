const contacts = require('../data/contacts');

module.exports = function(name) {
  const result = contacts.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
  console.log('results:');
  result.forEach(c => console.log(`${c.name} - ${c.phone}`));
};
