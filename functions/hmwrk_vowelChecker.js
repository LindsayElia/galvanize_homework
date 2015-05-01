/* 
vowelChecker

Instructions:
Write a function vowelChecker which takes a single letter string and returns 
true if it is a vowel and false if it isn't
*/

/*
My logic in English...

declare a function with the name 'vowelChecker'
compare input to a single vowel (and test, then add rest of vowels)
use OR to compare input to all of the vowels
if true, return 'true'
if not, return 'false'
use console.log to show the returned result
*/

var vowelChecker = function(x) {
	var letterToEvaluate = x;
	var count = 0;
	var status = "";
		if (letterToEvaluate === "a" || letterToEvaluate === "e" || letterToEvaluate === "i" || letterToEvaluate === "o" || letterToEvaluate === "u"){
			status = "true";
		}
		else {
			status = "false";
		}

	return status;
};

console.log(vowelChecker("m"));