// Javascript
/*
.push()
-to append data to the end of an array

.pop() 
-removes the last element from an array and returns that element

.shift()
-removes the first element from an array and returns that element

.unshift()
-insert data in the beginning of the array
*/

// The first two parameters of splice() are integers which represent positions
// the second parameter indicates the number of elements to delete. For example:

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

//Add Items Using splice()
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}


function updateRecords(id, prop, value) {
  if(prop === "tracks" && value !==""){
    if(collection[id][prop]){
      collection[id][prop].push(value); 
    }else{
      collection[id][prop] = [value];
    }
  }else if(value !== ""){
    collection[id][prop] = value;
  }else{
    delete collection[id][prop];
  }
  return collection;
}

// Ternary condition
// condition ? statement-if-true : statement-if-false;
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}


let i = 0; // used only in the block that it its declared
const I = 0; // read only variable (according to best practices , it is defined with caps lock
Object.freeze(I); // freeze objects, do not allow it to be updated,deleted 

//Arrow functions with parameters
const  myConcat = (arr1, arr2) => arr1.concat(arr2);

map()
filter()
reduce()

//ES6 begin

// spread operator
let minNum = Math.min(...numbers);

//destructuring
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
//Here's the same assignment statement with ES6 destructuring syntax:
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
//If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54


//Destructuring Assignment to Assign Variables from Arrays
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];

//Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
newArr.push([...arr]);

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

//Concise Object Literal Declarations Using Simple Fields
const getMousePosition = (x, y) => ({ x, y });


// Concise Declarative Functions with ES6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


every(), forEach(), map()

 if (arr[i].indexOf(elem)==-1){
      newArr.push(arr[i]);
    }
  }

//Check For The Presence of an Element
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2


import * as myMathModule from "math_functions";
myMathModule.add(2,3);

export

export var a = 1;
export { a , b };

// to see what type of vars
let seven = 7;
let three = "3";
console.log(typeof seven);
cnosole.log(typeof three);

let arraySum = myArray.reduce(previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);	

