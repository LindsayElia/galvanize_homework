// just testing that this file works when I run node in the command line
// console.log("hii");  

// requre the 'fs' or File System module, that lets us use readFileSync
var fsModule = require("fs");  


// use process.argv[2] to pass in the file name via the command line
// process.argv is an array, and the element at the [2] index will be the first thing that we type after 
// 'node' and 'thisfilename.js'
var contents = (fsModule.readFileSync(process.argv[2])).toString();

// .length gives me the total number of lines, so I want one less because I only want the number of returns, not lines
var numLines = (contents.split(/\r\n|\r|\n/).length - 1);


// log the result in the command line, converted to a string so humans can read it
// instead of as a the Buffered object thingy
console.log(numLines.toString());
