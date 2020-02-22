const fs = require("fs");
fs.renameSync("./assets/colors.json", "./assets/colorData.json");
//There is always a callback associated with the asynchronous function. Here by changing the file location we are also removing the file from assets and moving it to storage-files folder
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err){
        throw err;
    }
});
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);