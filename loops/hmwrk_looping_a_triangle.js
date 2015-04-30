/* 
Eloquent JavaScript, Chapter 2, Exercise: Looping a Triangle

Instructions:
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

/*
My logic in English...

I want to iterate 7 times
and print something each time
print a hastag the number of times of the previous line +1
7 loops, ++ the value each time, and value * (print #)
or a sub-loop?
*/

/*
I tried this first, it does not work!

var value = 0;

while (value < 7) {
	printMe = console.log("#");
	value*(console.log("#"));
	value++;
}

Then I used the hint in the book for this exercise and did the following:
*/


for (var number = "#"; number < "########"; number = number + "#")
  console.log(number);
