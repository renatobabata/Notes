// Regular expression

let myString = "freeCodeCamp";
let fccRegex = /freecodcamp/i; // ignore case sensitive
let result = fccRegex.test(myString);

// ignore case sensitive and search a pattern more than once
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);

// not aeiou 01234
let stringRegex = [^aeiou01234] 

//it will get all 'a' occurrences even if it is separated by other string (e.g. abap)
let stringRegex = /a+/ 
 
//Match characters in the beginning
/^word/

//Match characters in the end
/word?/
 
//Find Characters with Lazy Matching
"titanic"
/t[a-z]*?i/  
returns ["ti"]

// \w This shortcut is equal to [A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
 
// opposite of the \w is \W (capital letter)

// \d = [0-9]
// the opposite is \D


let userCheck = /^[a-z]{2,}\d*$/i; 

\S //will not match whitespace, carriage return, tab, form feed, and new line characters
[^ \r\t\f\n\v]

//plus sign + to look for one or more characters
//asterisk * to look for zero or more characters

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; 

// haaah
/ha{3}h/

// haaa...
/ha{3,}h/

// Timmmber
/Tim{3}ber/

// check for all or none
let rainbowRegex= /colou?r/;


//Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along
//A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
//A negative lookahead is used as (?!...)

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;

//Reuse Patterns Using Capture Groups.( and ), are used to find repeat substrings.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;

//to remove whitespace at the beginning and end of strings
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex,""); 
