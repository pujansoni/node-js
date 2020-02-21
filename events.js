// For the core and the npm module we do not need to specify path in node js require function
const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});
// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool", "Pujan");
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Goodbye", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});