// This method of exception handling is great for synchronous JavaScript. However, it will not 
// work under an async workflow. Listing 2-44 demonstrates this shortcoming.
try {
    setTimeout(function () {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }, 1000);
}
catch (e) {
    console.log('I will never execute!');
}
console.log('I am outside the try block');
// The reason why it does not work is because at the point in time when the callback for setTimeout executes, we 
// would already be outside the try/catch block. The setTimeout is going to call the function provided at a later point, 
// and you can see that happen in this code sample since “I am outside the try block” is executed. The default behavior 
// for uncaught exceptions in Node.js is to exit the process, and this is why our application crashes.