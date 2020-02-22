// Additionally, util has a few functions to check if something is of a particular type (isArray, isDate, isError).
var util = require('util');
console.log(util.isArray([])); // true
console.log(util.isArray({ length: 0 })); // false
console.log(util.isDate(new Date())); // true
console.log(util.isDate({})); // false
console.log(util.isError(new Error('This is an error'))); // true
console.log(util.isError({ message: 'I have a message' })); // false