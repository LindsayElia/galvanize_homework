/* 
Odd Numbers

Instructions:
Write code to print all the odd numbers between 1 and 1337.
*/

/*
My logic in English...

I want to skip anything not divisible by 2
and print it
and loop through all of them until I get to just below 1337
want to start after 1
use a if else statement, if true, print,
else, skip
*/


var num = 1;

while (num <= 1337 ){
	if (num % 2 !== 0) {
		console.log(num);
		}
	num++;
}


/*
class discussion...

tip:
run node program.js in terminal in case you write an infinite loop, easier to cancel out than to
close the browser and start over
		
David used some funky math instead of the modulus operator % which works if you don't know that % exists

most common solution was to check whether the number was even or odd and then print the result using an if
loop or a while loop

Lorien took the instructions literally to not output 1 or 1337
so she sarted at 2 and used '< 1337' instead of '<= 1337'

*/