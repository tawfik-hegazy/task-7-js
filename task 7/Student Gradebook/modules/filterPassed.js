const students = require('../data/students');
const calcAvg = require('./calculateAverage');

module.exports = function() {
  return students.filter(s => calcAvg(s.grades) >= 5);
};
