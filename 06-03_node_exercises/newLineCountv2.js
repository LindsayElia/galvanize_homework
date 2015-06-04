// use readFile instead of readFileSync
// this will be async so I'll need a callback function

// requre the 'fs' or File System module, that lets us use readFileSync
var fsModule = require("fs");
var contents;
var numLines;


// Idiomatic Node.js callbacks normally follow this pattern: 
// function callback (err, data) { /* ... */ }
fsModule.readFile("test.txt", function(err, data){
	if (err) throw err // not sure why we do not need brackets {} or a semi-colon ; after the condition here??
	contents = ("test.txt").toString();
	numLines = contents.split(/\r\n|\r|\n/).length - 1;
	console.log(numLines.toString());
});


// use process.argv[2] to pass in the file name via the command line
// process.argv is an array, and the element at the [2] index will be the first thing that we type after 
// 'node' and 'thisfilename.js'


// .length gives me the total number of lines, so I want one less because I only want the number of returns, not lines


// log the result in the command line, converted to a string so humans can read it
// instead of as a the Buffered object thingy

