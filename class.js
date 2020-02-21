// Class definition
function someClass() {
    // Properties go here
    this.someProperty = 'some initial value';
}
// Member functions go here:
someClass.prototype.someMemberFunction = function () {
    /* Do something using this */
    this.someProperty = 'modified value';
}
// Creation
var instance = new someClass();
// Usage
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value
// The main difference here vs. the revealing module pattern is that functions are shared between all the instances 
// and don’t take up memory for each new instance. This is because functions are only on .prototype and not on this. 
// Most classes inside core Node.js are written using this pattern.