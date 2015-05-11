// make a Fibonacci sequence using ****RECURSION****
// our two base cases are going to be the time when it is always the same

						  	  fib(4)
								|
				fib(3) 			+ 			fib(1)
				  |
		fib(2)	  +    fib(1)		
		  |
   fib(1) + fib(1)

// my attempt:
function fib(num){
	if (n == 0 || n == 1){
		return num;
	}
	else {
		return fib(num-1)+fib(num-2);
	}
}

fib(6);
fib(7);

