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