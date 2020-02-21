const cp = require("child_process");
const questionApp = cp.spawn("node", ["questions1.js"]);
questionApp.stdin.write("Pujan\n");
questionApp.stdin.write("Windsor\n");
questionApp.stdin.write("Change the world\n");
questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});
questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});