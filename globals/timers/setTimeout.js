// We’ve seen setTimeout before when we were discussing the Node.js event loop in Chapter 2. It sets up a function to 
// be called after a specified delay in milliseconds. Note that this delay is the minimum interval after which the specified 
// function is called. The actual duration after which it will be called depends upon the availability of the JavaScript 
// thread as we saw in the section on thread starvation in Chapter 2. It also depends upon when the operating system 
// schedules the Node.js process to execute (normally not an issue). A quick example of setTimeout, which calls a 
// function after 1,000 milliseconds (in other words, one second) is shown below:
setTimeout(function() {
    console.log('timeout completed');
}, 1000);