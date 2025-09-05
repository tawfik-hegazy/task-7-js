const add = require('./modules/addstudent');
const list = require('./modules/listStudents');
const filter = require('./modules/filterPassed');

add('ahmed', [1,2,3]);
add('mohamed', [4,5,6 ]);
add('hussein', [7,8,9]);

list();

const passed = filter();
console.log('\n Passed Students:');
passed.forEach(s => console.log(s.name));
