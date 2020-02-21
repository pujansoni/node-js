const fs = require("fs");
const md = `
#This is a new file
We can write text to a file with fs.3writeFile
`;
fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err){
        throw err;
    }
    console.log("file saved");
});