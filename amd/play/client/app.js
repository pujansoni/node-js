// To be upfront about all the modules we need in a file, the root of the file contains a call to define. To load 
// modules ./foo and ./bar in app.js in the same folder, the define call will be as shown below
define(['./foo', './bar'], function (foo, bar) {
    foo();
    bar.log();
});