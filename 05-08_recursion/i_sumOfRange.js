/*
galvanize homework 5/8/15

Define a function sumOfRange that takes a number x and 
returns the sum of all digits between 0 and x.

***Iterative Version***

*/

module.exports = {
	
	sumOfRange : function(x){
		newNum = 0;
		for (var i = 0; i <= x; i++){
			newNum += i;
		}
		return newNum;
	},

// givenNum = (4);
// sumOfRange(givenNum);

} // close exports