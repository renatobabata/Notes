// Javascript
//JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object
var myVar = 0;




.push()
//-to append data to the end of an array
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]

.pop() 
//-removes the last element from an array and returns that element
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

.shift()
//-removes the first element from an array and returns that element
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 1
console.log(threeArr); // Returns [ 4,6]

.unshift()
-insert data in the beginning of the array
var arr = [1,2,3];
arr.push(0);
// arr is now [0,1,2,3]

// javaScript objects
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
// you access the data in objects through what are called properties
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

//Add New Properties to a JavaScript Object
cat.meow = "meow";
cat["meow"] = "meow";

// Testing object properties
cat.hasOwnProperty("meow");  // true or false


//Delete Properties from a JavaScript Object
delete cat.meow;

// The parseInt() function parses a string and returns an integer
var a = parseInt("007");

// ternary operator, can be used as a one line if-else expression.
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

// The first two parameters of splice() are integers which represent positions
// the second parameter indicates the number of elements to delete. For example:

//using let, a variable with the same name can only be declared once.
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

// const are read-only.
const FAV_PET = "Cats";

// Arrow Functions to Write Concise Anonymous Functions
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//Higher Order Arrow Functions
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
// will become
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)


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

// constructor property
Dog.prototype = {
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};


//Prototype Inheritance
//All JavaScript objects inherit properties and methods from a prototype:
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype
//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";


//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;
  
  this.getWeight = function(){
    return weight;
  }
}

let ducky = new Bird();
ducky.getWeight();


// Immediately Invoked Function Expression (IIFE)
// The two parentheses () at the end of the function expression cause it to be immediately executed or invoked
(function() {
  console.log("A cozy nest is ready");
})();

// IIFE -> create module
let funModule = (function(){
return{
 isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
}
})();


// working with functions

function add (list,bookName) {
  return [...list,bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
      return list.filter((item) => item !== bookName);
    }
}


// .map , pode ser utilizado como for . Segue exemplo:
// Code Explanation: Using ES6 notation, each item in array is processed to extract title and rating. Parantheses are needed to return an object.
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations."
                   ]
var rating = watchList.map((item) => ({"title": item["Title"],"rating": item["imdbRating"]}));

  
// implement .map 
Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

