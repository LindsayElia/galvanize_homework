/*
galvanize homework 5/8/15

Define a function called power which take two arguments: 
a number and an exponent to raise that number to. 

For example:

console.log(power(2, 3));
//=> 8

console.log(power(4, 2));
//=> 16

***Recursive Version***

*/

var power = function(x,y){
	if (y === 0){					// base case
		return 1;
	}
	else {							// recursion
		return x * power(x, y-1);
	}
};

console.log(power(5,4));

