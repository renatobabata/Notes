// Javascript
//JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object

// to test javascript codes
https://repl.it/repls/ExtraneousBarrenUnderstanding

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


// Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0
var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);


//The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive)
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

// Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way.
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]

// split and join
return str.split(/\W/).join(" ");


// reduce()
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.
var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(
  x => Number(x.imdbRating)).reduce(
  (x1, x2) => x1 + x2) / watchList.filter(
  x => x.Director === "Christopher Nolan").length;

// split the array (taking special character off) -> filter only array ith a value,  and join all array position with each other with - -> lower case
console.log(title.split(/\W/).filter((obj) =>{
  return obj !=='';
}).join('-').toLowerCase());
//option 2
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()



//The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
numbers.every(function(currentValue) {
  return currentValue < 10;
});

//The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
  return arr.some(function(x){
    return x > 0;
  });

// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
function add(x) {
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}
add(10)(20)(30);
  

//Check two arrays and return a new array that contains only the items that are not in either of the original arrays.
//The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Code Explanation:
//Code using ES6 syntax to declare function using arrow functions.
//Using spread operator to retrieve the arguments.

//option 2
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}
// test here
translatePigLatin("consonant");


//Use indexOf() to find location of before in string.
//If first letter of before is capitalized, change first letter of after to uppercase.
//Replace before in the string with after.
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);
  return str;
}
// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//Intermediate Algorithm Scripting: DNA Pairing
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }

  //test here
  pairElement("GCG");


// 
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

//
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//Number of arguments can change dynamically, so we don’t need to bother providing our function uniteUnique() with arguments at all.
//We use a while loop to concatenate all the arguments into one array called concatArr.
//We use filter() to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
//Ordering will be preserved here.

// Convert HTML Entities
unction convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }

    // test here
    convertHTML("Dolce & Gabbana");

//Code Explanation:
//Create a object to use the Lookup functionality to easily find the characters.
//Split the original string by characters and use map to check for the changed html entity or use the same one. Alternatively you could use Regex str.replace(/&|<|>|"|'/gi.
//The a function is added which is what returns the converted entity or the original one if there is no conversion. If you go the regex route then you just have to return the matched hits. return html[entity];
//Lastly we join all the characters once again.


// Sum all Odd Fibonacci Numbers
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }
    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2);
    });
}

// test here
sumFibs(4);
//Code Explanation:
//Create an array of fibonacci numbers till num.
//Use reduce() method to find the sum of odd members of array.
//Return the sum.

// Sum All Primes
function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
// test here
sumPrimes(977);

//Code Explanation:
//Step 1: Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
//Step 2: Filter all numbers off of arr that are not prime by subjecting each element to the “trial division test” which “consists of dividing n by each integer m that is greater than 1 and less than or equal to the square root of n”. This test returns false if any number less than the element being operated on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.
//Step 3: Return the sum of all remaining elements of arr using .reduce().


// Drop it
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

//Code Explanation
//Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
//Return the filtered array.


// Steamroller - Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);

//Code Explanation:
//Use spread operator to concatenate each element of arr with an empty array
//Use Array.some() method to find out if the new array contains an array still
//If it does, use recursion call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
//
//If it does not, return the flattened array

// Binary Agent - Convert from binaty to string
    function binaryAgent(str) {
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
    }

// Arguments optional
function addTogether() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }
    // test here
    addTogether(2,3);
//First I iterate through the arguments and check for arguments that are not a number and return undefined
//If it’s not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
//Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined

// Palindrome Checker
function palindrome(str) {
      //assign a front and a back pointer
      let front = 0
      let back = str.length - 1

      //back and front pointers won't always meet in the middle, so use (back > front)
      while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
      }
      //if the whole string has been compared without returning false, it's a palindrome!
      return true
    }

//Code Explanation:
//I was given this problem in an interview (spoiler: I wasn’t hired  :frowning: ) I quickly arrived at the basic solution, and the interviewer told me to make it better. The algorithm would take way too long if he passed the Bible as the string. He wanted it to be instant.
//The simpler solutions perform very poorly on long strings because they operate on the whole string multiple times (toLowerCase(), replace(), split(), reverse(), join()) before comparing the whole string twice.
//The beauty of this solution is it never needs to read through the whole string, even once, to know that it’s not a palindrome. Why read through the whole string if you can tell that it’s not a palindrome just by looking at two letters?
//Uses a while loop instead of a for loop as a best practice - because we are using two variables, one is the index starting from the beginning of the string, and the other starts at the end of the string.


//Telephone number validator
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");
