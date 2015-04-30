/* 
Eloquent JavaScript, Chapter 2, Exercise: Chess Board

Instructions:
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a “#” character. 
The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, outputting a grid of 
the given width and height.
*/

/*
My logic in English...

How many squares of each color are in a chess board?
8 across and 8 down

will want to loop through 8 times, once for each row in the 8x8 grid

the first, thrid, fifth, etc rows are the same
as are the 2nd, 4th, 6th, etc rows

so I only need 2 conditions, and then I can print one condition and then the other condition

if even number, print #   ??
if odd number, print space ??

need an x axis and a y axis

*/


var numberInput = 8;
var i = 0;

while (i < numberInput) {
	row = " ";
		while (i < numberInput) {
			row = row + "#";
		i++;
		}
	}
	
console.log(row);
















