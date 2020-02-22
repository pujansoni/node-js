// The correct way of doing this is to handle the callback.
setTimeout(function() {
    try {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    } catch(e) {
        console.log('Error caught!');
    }
}, 1000);
// This method works fine from inside an async function. But now we have an issue of finding a way to tell the code 
// outside about the error. The file error4.js will describe about how to let other functions know that setTimeout function
// has try-catch block inside the function.
