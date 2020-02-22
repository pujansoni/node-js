// However, this is slightly cumbersome to manage because what the module returns can potentially be distant in 
// terms of lines from what a module contains. In foo1.js, function a is defined a lot earlier than the point at which 
// we actually export it to the outside world. So a common convention is to simply attach the objects we want to export 
// to module.exports inline, as shown below. This is possible because module.exports is implicitly set to {} by 
// Node.js
module.exports.a = function () {
    console.log('a called');
};
module.exports.b = function () {
    console.log('b called');
};