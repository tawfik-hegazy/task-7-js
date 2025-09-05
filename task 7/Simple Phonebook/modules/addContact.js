const contacts = require('../data/contacts');

module.exports = function(name, phone) {
  const id = Date.now();
  contacts.push({ id, name, phone });
};
