/* 
Temperature Convertor

Instructions:
Write code that asks the user for a temperature in Celsius and converts it to Fahrenheit. 
Bonus: ask the user first if they want to convert from F to C or C to F.
*/

/*
My logic in English...

Ask the user for a value
convert the value from a string to a number -- possibly unecessary with JavaScript due
to type conversion?
do some math wizardry to convert the number from Celsius to Fahrenheit
convert the value back from a number to a string -- possibly unecessary with JavaScript due
to type conversion?
display the new value

Bonus
ask if the user's value is Celsius or Fahrenheit
get value
if Celsius, follow the logic outlined above
if Farenheit, do a different set of steps (same logic as above,
except the math wizardry converts F to C)
else, tell the user to choose c or f!
display the old value and the new value and the scale for each one
*/


//Celsius to Fernheit:

var temperature = prompt("Please give me the temperature in Celsius.", " ");

temperature = ((temperature * 9)/5)+32;


//Bonus Answer:

var type = prompt("Would you like to start with Celsius or Fahrenheit? Type \"C\" for Celsius and \"F\" for Fahrenheit.");

if (type === "C"){
	var temperatureC = prompt("Please give me the temperature in Celsius.", " ");
	temperature = ((temperatureC * 9)/5)+32;
	prompt("With a temperature of " + temperatureC + " in Celsius, that converts to " + temperature + " in Fahrenheit.");
}
else if (type === "F"){
	var temperatureF = prompt("Please give me the temperature in Fahrenheit.", " ");
	temperature = (((temperatureF - 32)* 5)/9);
	prompt("With a temperature of " + temperatureF + " in Fahrenheit, that converts to " + temperature + " in Celsius.");
}
else {
	prompt("Sorry, that was not a capital C or capital F. You will need to run this program again.");
}

