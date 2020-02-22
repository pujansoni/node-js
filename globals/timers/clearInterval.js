// Both setTimeout and setInterval return an object that can be used to clear the timeout/interval using the 
// clearTimeout/clearInterval functions. The code below demonstrates how to use clearInterval to call a function after 
// every second for five seconds, and then clear the interval after which the application will exit.
var count = 0;
var intervalObject = setInterval(function () {
    count++;
    console.log(count, 'seconds passed');
    if (count == 5) {
        console.log('exiting');
        clearInterval(intervalObject);
    }
}, 1000);