// Consuming core modules is very similar to consuming file-based modules that you write yourself. You still use the 
// require function. The only difference is that instead of a relative path to the file, you simply specify the name of the 
// module to the require function. For example, to consume the core path module, you write a require statement like 
// var path = require('path'). As with file-based modules, there is no implicit global namespace pollution and what 
// you get is a local variable that you name yourself to access the contents of the module.
// Use require('path') to load this module. The path module exports functions that provide useful string 
// transformations common when working with the file system. The key motivation for using the path module is to 
// remove inconsistencies in handling file system paths. For example, path.join uses the forward slash `/` on UNIXbased systems like Mac OS X vs. backward slash `\` on Windows systems. Here is a quick discussion and sample of a 
// few of the more useful functions.
var path = require('path');
// Fixes up .. and .
// logs on Unix: /foo
// logs on Windows: \foo
console.log(path.normalize('/foo/bar/..'));
// Also removes duplicate '//' slashes
// logs on Unix: /foo/bar
// logs on Windows: \foo\bar
console.log(path.normalize('/foo//bar/bas/..'));