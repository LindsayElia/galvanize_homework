/* 
Eloquent JavaScript, Chapter 4, Exercise: The Sum of a Range

Instructions:
The introduction of this book alluded to the following as a 
nice way to compute the sum of a range of numbers:

	console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and 
returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of 
these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third 
argument that indicates the “step” value used to build up the array. 
If no step is given, the array elements go up by increments of one, 
corresponding to the old behavior. The function call range(1, 10, 2) should 
return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that 
range(5, 2, -1) produces [5, 4, 3, 2].

	// Your code here.

	console.log(sum(range(1, 10)));
	// → 55
	console.log(range(5, 2, -1));
	// → [5, 4, 3, 2]

*/

/*
My logic in English...

optional: Prompt user for two inputs
optional: assign variable start = input1
optional: assign variable end = input2
optional: convert strings to numbers

initialize 'range' as an empty array
use a for loop to loop through from the 'start' number to the 'end' number
adding each number as an item in the array each time
return the array after the loop is done running

bonus - use the step value as part of the counter, instead of incrementing the array count
by one each time (i++)

if 'start' is less than 'end', use a loop to increment upwards
if 'start' is more than 'end', use a loop to increment downwards

if no range is specified, increment by 1 for upwards or by -1 for downwards
*/

var allTheNumbers = [];

var range = function(x,y,z) {
	var firstNum = x;
	var lastNum = y;
	var step = z;

	if ( firstNum < lastNum ) {
		for (var i = firstNum; i <= lastNum; i = i + step) {
			allTheNumbers.push(i);
		}
		return allTheNumbers;
	}
	
	else if ( firstNum > lastNum ) {
		for (var n = firstNum; n >= lastNum; n = n - step) {
			allTheNumbers.push(n);
		}
		return allTheNumbers;
	}
	
	else if (firstNum === lastNum){
		allTheNumbers.push(firstNum,lastNum);
		return allTheNumbers;
	}
};

console.log(range(5,25,5));


/* 
I could not get the sum function to work


var allTheNumbers = [5,10,20,50];

var sum = function() {
	var total = 0;
	for (var m = 0; m <= allTheNumbers.length; m++){
		total = total + allTheNumbers.indexOf(m);
	}
	return total;
};
	
console.log(sum(5,25,5)); 

*/












