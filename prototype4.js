// Prototype is great for reading data off an object. However, if you set a property on the object, you break the link with the prototype.
// The prototype is only accessed if the property does not exist on the object.
// Lets create a test function and set a number on its prototype
function foo() { };
foo.prototype.bar = 123;
// Lets create two instances
var bas = new foo();
var qux = new foo();
//Overwrite the prototype value for bas
bas.bar = 456;
console.log(bas.bar); // 456 i.e. prototype not accessed
// Other objects remain unaffected
console.log(qux.bar); // 123
// You can see that when we modified bas.bar, bas.__proto__.bar was no longer accessed. Hence, lesson two: prototype is not good for properties you plan on writing to.