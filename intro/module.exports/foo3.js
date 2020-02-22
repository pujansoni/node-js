// However, typing module.exports all the time becomes cumbersome as well. So Node.js helps us by creating an 
// alias for module.exports called exports so instead of typing module.exports.something every time, you can simply 
// use exports.something. This is shown below
exports.a = function () {
    console.log('a called');
};
exports.b = function () {
    console.log('b called');
};
// It is important to note that exports is just like any other JavaScript variable; Node.js simply does exports = 
// module.exports for us. If we add something for example, foo to exports, that is exports.foo = 123, we are effectively 
// doing module.exports.foo = 123 since JavaScript variables are references
// However, if you do exports = 123, you break the reference to module.exports; that is, exports no longer points 
// to module.exports. Also, it does not make module.exports = 123. Therefore, it is very important to know that you 
// should only use the exports alias to attach stuff and not assign stuff to it directly. If you want to assign a single export, 
// use module.exports = as we have been doing until this section.