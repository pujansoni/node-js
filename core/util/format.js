// Another extremely useful feature is string formatting using the util.format function. This function is similar to 
// the C/C++ printf function. The first argument is a string that contains zero or more placeholders. Each placeholder 
// is then replaced using the remaining arguments based on the meaning of the placeholder. Popular placeholders are 
// %s (used for strings) and %d (used for numbers).
var util = require('util');
var name = 'nate';
var money = 33;
// prints: nate has 33 dollars
console.log(util.format('%s has %d dollars', name, money));