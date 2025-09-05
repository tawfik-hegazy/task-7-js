const students = require('../data/students');

module.exports = function(name, grades) {
  students.push({ name, grades });
};
