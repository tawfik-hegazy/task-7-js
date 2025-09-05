const contacts = require('../data/contacts');

module.exports = function(id) {
  const index = contacts.findIndex(c => c.id === id);
  if (index !== -1) contacts.splice(index, 1);
};
