// JavaScript has a great exception handling mechanism that you might already be familiar with from other 
// programming languages. To throw an exception, you simply use the throw JavaScript keyword. To catch an exception, 
// you can use the catch keyword. For code you want to run regardless of whether an exception was caught or not, you 
// can use the finally keyword.
try {
    console.log('About to throw an error');
    throw new Error('Error thrown');
}
catch (e) {
    console.log('I will only execute if an error is thrown');
    console.log('Error caught: ', e.message);
}
finally {
    console.log('I will execute irrespective of an error thrown');
}
// The catch section executes only if an error is thrown. The finally section executes despite any errors thrown 
// within the try section. This method of exception handling is great for synchronous JavaScript.