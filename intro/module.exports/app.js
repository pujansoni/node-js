// The items that we intend to export from a module should be 
// attached to the module.exports variable. It is important to note that module.exports is already defined to be a new 
// empty object in every file. That is, module.exports = {} is implicitly present. By default, every module exports an 
// empty object, in other words, {}.
var foo1 = require('./foo1');
foo1.a();
foo1.b();
var foo2 = require('./foo2');
foo2.a();
foo2.b();
var foo3 = require('./foo3');
foo3.a();
foo3.b();