const books = require('../data/books');

module.exports = function(id) {
  const i = books.findIndex(b => b.id === id);
  if (i !== -1) books.splice(i, 1);
};
