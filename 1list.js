const fs = require("fs");

// Here the Sync in the readdirSync means that all resources are blocked till the files are read
// console.log("started reading files");
// const files = fs.readdirSync("./assets");
// console.log("complete");
// console.log(files);

// For asynchronous function the code before or after the function will be executed first. Here the last console line will be executed first
// we will use readdir asynchronous function like below:
fs.readdir("./assets", (err, files) => {
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);
});
console.log("started reading files");
