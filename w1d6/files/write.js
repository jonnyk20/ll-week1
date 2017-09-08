var fs = require("fs");

var filePath = "./test_sync.txt";
var fileData = "Testing synchronous file write.\n";

fs.writeFileSync(filePath, fileData);
console.log("successfully wrote to", filePath);