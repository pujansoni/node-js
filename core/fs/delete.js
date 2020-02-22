var fs = require('fs');
fs.unlink('./test.txt', function (err) {
    if (err) {
        console.log('Error:', err);
    }
    else {
        console.log('test.txt successfully deleted');
    }
});
// The main difference is that the async version takes a callback and is passed the error object if there is one.
//  It is better to use the asynchronous functions whenever possible in busy processes such as in a web server scenario.