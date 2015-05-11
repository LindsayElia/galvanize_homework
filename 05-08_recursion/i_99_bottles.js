/*
galvanize homework 5/8/15

Define a function that takes an argument n and returns the lyrics to 99 bottles 
of beer on the wall, starting with that number n. For example, singSong(99) 
would print out the lyrics to 99 Bottles of Beer on the Wall.

***Iterative Version***

n + " bottles of beer on the wall, " +
n + " bottles of beer...take one down, pass it around, " +
n-1 + " bottles of beer on the wall."


Ignore plural case for first attempt
*/
	
var	singSong = function(n){
	num = n;
	for (var i = num; num > 0; num--){
		console.log(num + " bottles of beer on the wall, " + 
		num + " bottles of beer...take one down, pass it around, " + 
		(num-1) + " bottles of beer on the wall.");		
	}									
};
	
var givenNum = 4;
singSong(givenNum);