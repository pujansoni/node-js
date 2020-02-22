// Having some mechanism to share state between modules is useful in various contexts. Since modules are cached, 
// every module that require’s foo.js will get the same (mutable) object if we return an object foo from a module 
// foo.js. This example in shared folder demonstrates this process with a simple example in which we export an object. 
// This object is smodified in app.js. This modification affects what is returned by require in bar.js
// This allows you to share in-memory objects between modules that are useful for things like using modules for configuration.
var foo = require('./foo');
console.log('initial something:', foo.something); // 123
// Now modify something:
foo.something = 456;
// Now load bar:
var bas = require('./bar');