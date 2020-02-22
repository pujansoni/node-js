// As we have shown, the same object is returned each time a require call resolves to the same file in a Node.js process. 
// If you want some form of new object creation mechanism for each require function call, you can export a function 
// from the source module that returns a new object. Then require the module at your destination and call this 
// imported function to create a new object.
module.exports = function () {
    return {
        something: 123
    };
};