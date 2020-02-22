// Similar to the setTimeout function is the setInterval function. setTimeout only executes the callback function 
// once after the specified duration. But setInterval calls the callback repeatedly after every passing of the specified 
// duration. This is shown below where we print out second passed after every second. Similar to setTimeout, 
// the actual duration may exceed the specified value depending on the availability of the JavaScript thread.
setInterval(function () {
    console.log('second passed');
}, 1000);
