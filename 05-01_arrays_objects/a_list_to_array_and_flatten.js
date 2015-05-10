// review from class 5/7/15
// throwing in here for reference
// Colt wrote this

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

console.log(arrayToList([10, 20]));
// {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}



/////////////////////////////////
// with a while loop

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  console.log(list)
  return list;
}

function listToArray(list) {
  var array = [];
  var node = list;
  
  while(node){
    array.push(node.value)
    node = node.rest
  }
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

// console.log(arrayToList([10, 20]));
// {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}


/////////////////////////////////
// FLATTEN

function flatten(input) {
  var output = [];
  var todo = [input];
  var current;
  var head;
  
  while(todo.length) {
    current = todo.shift();
    if(Array.isArray(current)) {
      current = current.slice();
      head = current.shift();
      
      if(current.length) {
        todo.unshift(current)
      }
      
      todo.unshift(head);
      
    } else {
      output.push(current);
    }
  }
  console.log(output);
}

current = [1,2, [3,4], 5, [6,[7]]]
todo = []

flatten([1,2, [3,4], 5, [6,[7]]]);




