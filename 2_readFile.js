const fs = require("fs");

//First we will see the Asynchronous function
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
// console.log(text);

//We can also use the synchronous function
// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//     if(err){
//         console.log(`An error has occured: ${err.message}`);
//         process.exit();
//     }
//     console.log("file contents read");
//     console.log(text);
// });

//To read a binary file we can omit the encoding argument
fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});