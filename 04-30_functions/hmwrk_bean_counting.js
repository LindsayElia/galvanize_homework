/* 
Eloquent JavaScript, Chapter 3, Exercise: Bean Counting

Instructions:
Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be 
counted (rather than counting only uppercase “B” characters). 

Rewrite countBs to make use of this new function.

FOR EXAMPLE:
// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

*/

/*
My logic in English...

declare a function with the name 'countBs'
pass into it one argument (x)
assign the argument to a var called stringToEvaluate

use .charAt(N) to look at each letter in the string
use a for loop to cycle through all of the letters one at a time,
until I reach the .length of the string
use variable 'i' to hold each letter as I loop through them
create a variable called count to hold the count of the "B"s

use if else to decide if the letter is "B"
if it is, add it to the count of letters, then repeat the for loop
else, do nothing & repeat the for loop

create a variable called count to hold the count of the "B"s

use console.log to show the returned result
*/


// ORIGINAL countBs FUNCTION
var countBs = function(x) {
	var stringToEvaluate = x;
	// var letter = 0;
	var count = 0;
	for (i = 0; i < stringToEvaluate.length; i++) {
		if (stringToEvaluate.charAt(i) === "B"){
			count = count + 1;
		}
		else {
					// do nothing
		}
	}
	return count;
};

console.log(countBs("BigBlueBaseballBat"));


// NEW 'countChar' FUNCTION

/*
compare letter to se
function takes two string arguments
compare letters in first string to the second argument
if true, add 1 to the count
else, do nothing
loop until all strings have been evaluated
*/

var countChar = function(x,y) {
	var stringToEvaluate = x;
	var letterToEvaluate = y;
	var count = 0;
	for (i = 0; i < stringToEvaluate.length; i++) {
		if (stringToEvaluate.charAt(i) === letterToEvaluate){
			count = count + 1;
		}
		else {
					// do nothing
		}
	}
	return count;
};

console.log(countChar("rosyredraya", "r"));


// NEW 'countBs' FUNCTION USING 'countChar' FUNCTION
function countBs () {
	return countChar ();
}

console.log(countBs("BigBlueBaseballBatBBBB", "B"));









