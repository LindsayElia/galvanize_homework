/* 
99 Bottles

Instructions:
Write code to print out the lyrics 
to 99 bottles of beer on the wall. 
Pay attention to pluralization!
*/

/*
My logic in English...

Write out the song
use variables for the number of bottles and the words 'bottles' and 'bottle'
pass those variables into the print-string
set the starting value of numBottle to 99
iterate down until 0
if value === 1 then print 'bottle'
else print 'bottles'
*/

/* song lyrics:

99 bottles of beer on the wall,
99 bottles of beer...
take one down, pass it around, 98 bottles of beer on the wall!

repeat
*/

var numBottles = 99;
var pluralBottles = "bottles";
var singularBottles = "bottle";

while (numBottles >=0){
	
	var oneLessBottle = (numBottles - 1);
	
	// condition to determine bottle type when it is mentioned first two times in song
	if (numBottles === 1){
		var bottleTypeFirstLine = singularBottles;
	}
	else var bottleTypeFirstLine = pluralBottles;

	
	// condition to determine bottle type when it is mentioned the third time in song
	if (oneLessBottle === 1){
		var bottleTypeSecondLine = singularBottles;
	}
	else
		var bottleTypeSecondLine = pluralBottles;
		
	console.log(numBottles + " " + bottleTypeFirstLine + " of beer on the wall, " + numBottles + " " + bottleTypeFirstLine + " of beer...take one down, pass it around, " + oneLessBottle + " " + bottleTypeSecondLine + " of beer on the wall!");

	numBottles = numBottles - 1;

}


