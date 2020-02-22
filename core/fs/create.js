// The fs module provides access to the filesystem. Use require('fs') to load this module. The fs module has 
// functions for renaming files, deleting files, reading files, and writing to files.
var fs = require('fs');
// write
fs.writeFileSync('test.txt', 'Hello fs!');
// read
console.log(fs.readFileSync('test.txt').toString());