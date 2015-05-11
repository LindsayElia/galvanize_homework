/*
galvanize homework 5/8/15

Define a function called power which take two arguments: 
a number and an exponent to raise that number to. 

For example:

console.log(power(2, 3));
//=> 8

console.log(power(4, 2));
//=> 16

***Iterative Version***

*/

module.exports = {
	
	power : function(x,y){
		numPower = x;
		for (var i = 1; i < y; i++){
			numPower = x * numPower;
		}
		return numPower;		
	},
	
}	// close export
	
//	console.log(power(2,3));