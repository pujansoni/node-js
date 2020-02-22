const cp = require("child_process");
// The exec is a synchronous command
// cp.exec("open http://www.linkedin.com/learning");
// cp.exec("open -a Terminal .");
cp.exec("ls", (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});
