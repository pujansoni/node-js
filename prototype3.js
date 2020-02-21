// Lets create a function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;
// Lets create two instances
var bas = new foo();
var qux = new foo();
// Show original value
console.log(bas.bar); //123
console.log(qux.bar); //123
// Modify prototype
foo.prototype.bar = 456;
// All instances changed
console.log(bas.bar); //456
console.log(qux.bar); //456
// Imagine you need 1000 instances created. All the functionality you put on prototype is shared. And therefore lesson one: prototype saves memory