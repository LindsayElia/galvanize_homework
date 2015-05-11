/*
galvanize homework 5/8/15

Define a function that takes an argument n and returns the lyrics to 99 bottles 
of beer on the wall, starting with that number n. For example, singSong(99) 
would print out the lyrics to 99 Bottles of Beer on the Wall.

***Recursive Version***

Ignore plural case for first attempt
*/
var singSong = function(n){
	if (n < 0) {		// termination case
		console.log("Please enter a positive number");
		return;
	}
	if (n === 1) {		// base case
		console.log(n + " bottles of beer on the wall, " + 
		n + " bottles of beer...take one down, pass it around, " + 
		(n-1) + " bottles of beer on the wall.");
		return;
	}
	else {				// recursion
		console.log(n + " bottles of beer on the wall, " + 
		n + " bottles of beer...take one down, pass it around, " + 
		(n-1) + " bottles of beer on the wall.");
		newNumber = n-1;
		singSong(newNumber);		
	}
};


givenNum = (4);
singSong(givenNum);
