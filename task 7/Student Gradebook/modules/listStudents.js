const students = require('../data/students');
const calcAvg = require('./calculateAverage');

module.exports = function() {
  console.log('📋 Student List:');
  students.forEach(s => {
    const avg = calcAvg(s.grades);
    console.log(`${s.name} - Avg: ${avg.toFixed(2)}`);
  });
};
