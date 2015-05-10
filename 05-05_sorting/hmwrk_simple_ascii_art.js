/*	Homework galvanize 5/5/15
	Simple Ascii Art

Part 1 - Using loops (don't just use a bunch of console.log statements!), 
print out a simple ascii art triangle like the one below:

		*			1 	1
	   ***			3 	2
	  *****			5	3
	 *******		7	4
	*********		9	5

*/



var makeGiantTriangle = function(numberInput){
	var star = "*";
	var space = " ";
	var myLine;
	for (var i = 0; i < 5; i+=2){
		for (var j = 0; j < 5; j+=2){
			myLine = space + star + space;
			console.log(myLine);
		}
	}
	console.log(myLine);
	return myLine;
};


var maxNum = 10;
console.log(makeGiantTriangle(maxNum));


/* Part 2 - Ask the user for the number of rows and the ascii character that 
 the pyramid should consist of (you will need to do this in the web browser).
 */

/*
class review
note: I can add multiple things as values in my for loop condition
just use commas
for (i = 1, j = -1, x = 3; ...; i++)
etc 



 
 