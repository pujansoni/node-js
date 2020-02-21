const path = require("path");
//The dirUploads variable will contain full path to the folder uploads
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);
const util = require("util");
//The utility module also provide us with the timestamp
util.log(path.basename(__filename));
util.log(" ^ The name of the current file");
const v8 = require("v8");
util.log(v8.getHeapStatistics());