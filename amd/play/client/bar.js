// define can take a special argument called exports, which behaves similar to the exports variable in Node.js. 
// Let’s create the module bar.js using this syntax, as shown below
define(['exports'], function (exports) {
    var bar = exports.log = function () {
        console.log('bar.log was called');
    };
});
// Note that you can only use exports to attach variables you want to export (for example, exports.log = 
//     /*something*/), but you cannot assign it to something else (exports = /*something*/) as that would break the 
//     reference the exports variable monitored by RequireJS. This is conceptually quite similar to the exports variable in 
//     Node.js.