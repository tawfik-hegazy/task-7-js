const books = require('../data/books');

module.exports = function() {
  console.log(' Book List:');
  books.forEach(b => console.log(`id :${b.id} , ${b.title} , ${b.author}`));
};
