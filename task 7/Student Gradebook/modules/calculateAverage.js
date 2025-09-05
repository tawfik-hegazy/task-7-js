module.exports = function(grades) {
  const sum = grades.reduce((a, b) => a + b, 0);
  return grades.length ? sum / grades.length : 0;
};
