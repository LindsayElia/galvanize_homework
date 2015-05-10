/* 
maxOfThreeNumbers

Instructions:
Define a function maxOfThreeNumbers which takes three numbers as arguments and returns the largest one.
*/

/*
My logic in English...

declare a function with the name 'maxOfThree'
pass into it three arguments (x, y, z)
assign each argument to a variable
use a variable to hold the larger of two variables, maxSize
use OR to compare the three arguments (I tried OR but that did not work. Had to use AND instead.)
use if else to compare each one 
return the argument that is the largest
use console.log to show the returned result
*/

var maxOfThree = function(x,y,z) {
	var size1 = x;
	var size2 = y;
	var size3 = z;
	var maxSize = 0;
	if (size1 > size2 && size1 > size3) {
		maxSize = size1;
		}
	else if (size2 > size1 && size2 > size3) {
		maxSize = size2;
		}
	else if (size3 > size1 && size3 > size2) {
		maxSize = size3;
		}
	return maxSize;
};

console.log(maxOfThree(25,13,100));