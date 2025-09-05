const books = require('../data/books');

let nextId = 1;

module.exports = function(title, author) {
  books.push({ id: nextId++, title, author });
};
