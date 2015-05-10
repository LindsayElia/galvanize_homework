/* 
Eloquent JavaScript, Chapter 3, Exercise: Minimum

Instructions:
Write a function min that takes two arguments and returns their minimum.

FOR EXAMPLE:
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/

/*
My logic in English...

declare a function with the name 'min'
pass into it two arguments (x, y)
assign each argument to a variable
use if else to compare the variables
return the first variable if it is smaller
else return the second variable
use console.log to show the returned result
*/

var min = function(x,y) {
	var size1 = x;
	var size2 = y;
	if (size1 < size2){
		return size1;
	}
	else {
		return size2;
	}
};

console.log(min(25,13));