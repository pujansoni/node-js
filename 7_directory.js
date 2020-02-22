const fs = require("fs");
//The line below will rename the directory
//fs.renameSync("./storage-files", "./storage");
//The readdirSync() function will give us an array of every file in the directory
fs.readdirSync("./storage").forEach(fileName => {
    //Here we are removing all the files in the storage directory by using the unlinkSync function
    fs.unlinkSync(`./storage/${fileName}`);
});
//The rmdir will remove the directory, but it will throw an error if the directory is not empty
fs.rmdir("./storage", err => {
    if(err){
        throw err;
    }
    console.log("./storage directory removed");
});