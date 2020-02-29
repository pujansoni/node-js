var foo = require('./foo');
var bar = require('./bar');
foo();
bar.log();
// To convert this code into AMD compatible version run the command: browserify app.js -o amdmodule.js
// This takes app.js and all its dependencies (foo.js and bar.js) and converts them into a single AMD compatible 
// module amdmodule.js in the same folder. As a final step, we simply load this module from our client app.js