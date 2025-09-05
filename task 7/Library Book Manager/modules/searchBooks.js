const books = require('../data/books');

module.exports = function(authorName) {
  const found = books.filter(b => b.author.toLowerCase().includes(authorName.toLowerCase()));
  console.log('Search Results:');
  found.forEach(b => console.log(`${b.title} by ${b.author}`));
};
