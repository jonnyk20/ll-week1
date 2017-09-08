var fs = require("fs");

var filePath = "./test_async.txt";
var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err){
  if (err){
    throw err;
  }
  console.log("successfully wrote to", filePath);
});

console.log("Program Ended");