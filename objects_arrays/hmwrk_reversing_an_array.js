/* 
Eloquent JavaScript, Chapter 4, Exercise: Reversing An Array

Instructions:
Arrays have a method reverse, which changes the array by inverting the order 
in which its elements appear. For this exercise, write two functions, reverseArray 
and reverseArrayInPlace. The first, reverseArray, takes an array as argument and 
produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies 
the array given as argument in order to reverse its elements. 

Neither may use the standard reverse method.

	// Your code here.

	console.log(reverseArray(["A", "B", "C"]));
	// → ["C", "B", "A"];

	var arrayValue = [1, 2, 3, 4, 5];
	reverseArrayInPlace(arrayValue);
	console.log(arrayValue);
	// → [5, 4, 3, 2, 1]

*/

/*
My logic in English...

For reverseArray - 
create a function that will
loop through the items in the array
and take the last item and put it at the beginning, 
then the second to last, etc.
*/

var reverseArray = function(input){
	var holder = [];
	var arrayLength = input.length;
	for (var i = (arrayLength - 1); i >= 0; i--){
		holder.push(input[i]);
	}
	return holder;
};

console.log(reverseArray(["A", "B", "C", "D"]));

/*
For reverseArrayInPlace - 
use a temporary local variable to hold the array item,

do the same as reverseArray except pop the last item off and redefine 
the array...doesn't work?
*/

// this does not work :(

var reverseArrayInPlace = function(input){
	var holder = [];
	var arrayLength = input.length;
	for (var i = (arrayLength - 1); i >= 0; i--){
		tempItem = input[i];
		console.log(tempItem);
		holder = input.push(tempItem);
		input = holder;
		
	}
	console.log(holder);
	console.log(input);
	return input;
};

var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]












