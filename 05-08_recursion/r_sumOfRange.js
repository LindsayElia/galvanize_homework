/*
galvanize homework 5/8/15

Define a function sumOfRange that takes a number x and 
returns the sum of all digits between 0 and x.

***Recursive Version***

*/


var sumOfRange = function(x){
	if (x === 0 || x === 1){		// base cases
		return x;
	}
	else {							// recursion
		return x + sumOfRange(x-1);	
	}
};
	


givenNum = (4);
sumOfRange(givenNum);
