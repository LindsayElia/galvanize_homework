/* 
Eloquent JavaScript, Chapter 2, Exercise: FizzBuzz

Instructions:
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of 
the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
for numbers divisible by only one of those).
*/

/*
My logic in English...

run the loop below for numbers 1 to 100, start at 1 and stop at 100

if number is divisible by both 3 and 5 then print FizzBuzz
else if number is divisible by 3, print Fizz
else if number is divisible by 5, print Buzz
else print the number

*/

var num = 1;

while (num <= 100 ){
	if (num % 3 === 0 && num % 5 === 0) {
		console.log("FizzBuzz");
		}
	else if (num % 3 === 0) {
		console.log("Fizz");
		}
	else if (num % 5 === 0) {
		console.log("Buzz");
		}
	else {
		console.log(num);
	}
	num++;
}

