/* 
Guessing Game

Instructions:
Create a 'Guessing Game'. The game starts by picking a random number. 
It then prompts the user to guess the number. If the user's number is lower/higher, 
it will prompt the user to enter another guess and tell the user if the guess was 
too high or too low. This continues until the correct guess is entered. 
When the correct guess is entered the user is given a success message with the correct number.
*/

/*
My logic in English...

Need to figure out how to generate a random number
assign that number to a variable, randomNum

prompt to ask user to guess a number
compare that number to randomNum variable

if user's input is too low, prompt again telling them
if user's input is too high, prompt again telling them
if user's input is correct, show a success message & include the randomNum in the message

loop until input is correct
when input = randomNum, break the loop

*/

var guessString = "";
//prompt user to guess here

// generate randomNum here
var randomNum = ???

//convert string to number
var guessNum = parseInt(guessString);

while (guessNum !== randomNum){
	if (guessNum > randomNum) {
		//prompt too high & re-assign guessString
	}
	else (guessNum < randomNum){
		//prompt too low & re-assign guessString
	}
};

if (guessNum === randomNum){
	// show success message here
};



