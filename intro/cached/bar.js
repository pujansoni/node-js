// Reading something from the file system is an order of magnitude slower than reading it 
// from RAM. Hence, after the first time a require call is made to a particular file, the module.exports is cached. The 
// next time a call is made to require that resolves to the same file (in other words, it does not matter what the original 
// relative file path passed to the require call is as long as the destination file is the same), the module.exports variable 
// of the destination file is returned from memory, keeping things fast.
var t1 = new Date().getTime();
var foo1 = require('./foo');
console.log(new Date().getTime() - t1); // > 0
var t2 = new Date().getTime();
var foo2 = require('./foo');
console.log(new Date().getTime() - t2); // approx 0