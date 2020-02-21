//  If you call a function with the new JavaScript operator, it creates a new JavaScript object and this within the function refers to this newly created object
function foo(){
    this.foo = 123;
    console.log('Is this global?: ', this==global);
}
//without the new operator
foo();
console.log(global.foo);
//with the new operator
var newFoo = new foo();
console.log(newFoo.foo);