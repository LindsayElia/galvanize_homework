// make a Fibonacci sequence using ****ITERATION**** (iteratively)

// my attempt:
function fib(num){
	var temp1 = 1;
	var temp2 = 1;
	var fibNum = 0;
	for (var i = 1; i < num-1; i++){
		fibNum = temp1 + temp2;
		temp1 = temp2;
		temp2 = fibNum;
	}
	return fibNum;
}

fib(8)
//=> 13 if starting from 0,1,1,2, 21 if starting from 1,1,2,3 etc

fib(11)
//> 55

use Fibonacci sequence starting at 1:
1,1,2,3,5,8,13,21,34,55,89,144


// class solution:
function fib(num){
	var fibNum = 1;
	var prev = 0;
	var temp;	// placeholder
	for (var i = 1; i < num-1; i++){
		temp = fibNum;
		fibNum += prev;
		prev = temp;
	}
	return fibNum;
}

