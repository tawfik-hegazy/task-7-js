const add = require('./modules/addBook');
const remove = require('./modules/removeBook');
const list = require('./modules/ListBooks');
const search = require('./modules/searchBooks');

add('Clean Code', 'Robert C. Martin');


list();

search('Robert C. Martin');

const books = require('./data/books');
remove(books[0].id);
