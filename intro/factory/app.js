var foo = require('./foo');
// create a new object
var obj = foo();
// use it
console.log(obj.something); // 123
// We can run the code above in one line: console.log(require('./foo')().something);