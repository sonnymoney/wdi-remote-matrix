// JS Basics
////////////////////////////
// Exercise 1.
var firstVariable = "Hello World";
var firstVariable = 2;
var secondVariable = firstVariable;
var secondVariable = "a string";
// The value of firstVariable is 2

// Exercise 2.
//
var yourName = "Kristyn";
var greeting = "Hello, my name is " + yourName;
console.log(greeting);

//////////////////////////////////
// Javascript Data Types (Primitives)
///////////////////////////////////
// Conceptual Ques.
// 1. strings, numbers, boolean, null, undefined (only need 4)
// 2. integer is a while number, float has decimal.
// 3. var array = [];

// Exercise 1.

var a = [1, 10, "Hello", true];
a[0];
a[2] = "World";
console.log(a[2]);

// Exercise 2.
// NOTE: made a mistake here by using the word `class` for a variable name. It won't work becuse it's a keyword.
classRoom = ["Matrix", "Zoom", "Github", "Github"];
classRoom[2];
classRoom[2] = "Octocat";
classRoom.push("Cloud City");

// Exercise 3.
var myString = "This is supposed to 'have quotes'";

// Exercise 4.
"World" * 5
// Output => NaN
// Javascript is lookig for a number to multiply and we gave it a string. The output means "Not a number". Using the *, Javascript will try to coerce strings to numbers, but World cannot be turned into a number.

//////////////////////////////////
// Javascript (Primitive Methods & Properties)
///////////////////////////////////

// Conceptual Questions
// 1. Properties OR Methods for a strong
// length, constructor, indexOf(), slice(), toUpperCase(), concat(), toLowerCase() (Any 5 will do)
// 2. .push(), .pop(), .reverse(), .sort(), .unshift()

// Exercise 1.
"The Peculiar Purple Pieman of Porcupine Peak".length
// Or save it to a variable and call .length on the variable

// Exercise 2.
var nums = [5,10,500,20];
nums.push("Egon");
nums.pop("Egon");
nums.unshift("Bob Marley");
nums.shift();
nums.reverse();

///////////////////////////////////
//Javascript Operators
/////////////////////////////////
a < b; //OR a !== b
c > d; // OR c != d
'Name' === 'Name';
a + b === c;
a * a === d;
e === 'Kevin';
48 == '48';

///////////////////////////////////
//if else
/////////////////////////////////

// Exercise 1 & 2
var sizeOfNumber = function (x) {
  if (x < 10){
    alert("little number");
  } else {
    alert("big number");
  };
};

sizeOfNumber(2);

// Exercise 3
var sizeOfNumber = function (x) {
  if (x < 5){
    alert("little number");
  } else if (x > 4 && x < 10){
    alert("middle number");
  } else {
    alert("big number");
  };
};

sizeOfNumber(2);
// Expected output
// => "little number"
