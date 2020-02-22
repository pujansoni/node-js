// So far, we have only been exporting a single object from a module. This can be done quite simply by assigning the 
// object we need exported to module.exports. However, it is a common requirement to export more than one variable 
// from a module. One way of achieving this is to create a new object literal and assign that to module.exports
var a = function () {
    console.log('a called');
};
var b = function () {
    console.log('b called');
};
module.exports = {
    a: a,
    b: b
};