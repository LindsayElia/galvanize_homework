/*
Write code to print out the first 100 Fibonacci numbers. 

Fibonacci sequence is made up of the addition of the previous 2 numbers in the sequence.

0, 1, 1, 2, 3, 5, 8, 13, 21,...

*/

var fibonacci = function (num){
	var temp1 = 0;
	var temp2 = 1;
	var temp3 = 0;
	console.log(1);
	for ( i = 1; i < num; i++){
		temp1 = i + temp1;
		temp2 = i + temp2;
		temp3 = temp1 + temp2;
		console.log(temp3);
	}
	
};

var howMany = 100;
console.log(fibonacci(howMany));
