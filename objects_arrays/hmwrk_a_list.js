// a LIST is a nested set of OBJECTS
// where each object holds a reference to the next object within it
// objects do not have structure, the values do not come first or second, like they do in an array
// they are not in a saved location, like index[0]
// they are accessed by their key, or name, the thing on the left of the key-value pair
// object = { name : Lindsay, age : 33};

var arrayToList = function(arr){
	// make a list from an array
	// turn [1,2,3] into this:
	//						 list = {
		//						value : 5,
		//						rest : {
			//							value : 7,
			//							rest : {
				//							value : 9
				//							rest : null
				//								}
			//							}
		//						}

// one tip is to work from the inside out
// start at end of array, make rest null
// take each 'thing' we're creating and hold onto it inside of the previous 'rest' key

		//		var list;			// initialise empty list
		//		var list = {};		// does it matter if I use {} to initialize as an object???
		var list = null; 	// there is nothing to match up at the end of the array key-value
							// pair, so if we add null here we can pass it the first time list is definied below
		for (var i = arr.length - 1; i >= 0; i--) {
			list = {value: arr[i], rest: list};
		}
			

		return list;
};

var listToArray(list){
	// make an array from a list
};

var prepend = function(){
	// takes an elemant and a list and creates a new list that adds the element to the *front* of the input list
};

var nth = function(){
	// takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element
};

var numbers = [4, 6, 9, 111];
console.log(arrayToList(numbers));



/* clean version:
*/

var arrayToList = function(arr){
		var list = null; 
		for (var i = arr.length - 1; i >= 0; i--) {
			list = {value: arr[i], rest: list};
		}
		return list;
};
var numbers = [4, 6, 9, 111];
console.log(arrayToList(numbers));

/* put this into a console and expand each object to view the result */
/* jsbin truncates this function */

