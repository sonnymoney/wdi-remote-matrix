![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Intro to JS<br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page<br>
Topics: Javascript Intro <br>
<hr>

# INTRO TO JS


### Lesson Objectives
_After this lesson, students will be able to:_

- Explain why we are learning Javascript
- Run single-line Javascript code in the Chrome console
- Write and evaluate expressions using four of the five primitives: strings, numbers, null, and undefined
- Use methods on strings and numbers, and research more methods
- Connect a script to an html document
- Begin writing a console adventure game with a browser prompt

<hr>


### What is Javascript? (1 min)

Javascript is a programming language. It is written as a sequence of commands that can be read and executed by a program. For Javascript this typically means Node or Chrome will read the code and figure out what to do with it.

Javascript was originally developed for Netscape Navigator 2.0 in 1995! The prototype for Javascript was written in 10 days by one guy. When it was being made it was called Mocha, then LiveScript, then renamed JavaScript for marketing purposes. It has little in common  with the programming language called Java.


### Why Javascript? (2 min)

Javascript is the only programming language that runs natively in web browsers. We don't really have a choice. We really want to learn JavaScript. Maybe in the future some other language will replace it, but JavaScript is being updated all the time, so it looks like it will be around for a while, and ES6 already has good support.

When we move into servers, you'll see that because of Javascript's prevalance we can use Node to write Javascript for the back-end, not just for browsers. All in all, learning Javascript is an awesome investment. <br><br>

<br>
<hr>

### CHROME CONSOLE - single-line code (5 min)

url `about:blank`

Open Javascript console `option + command + J`



### ANATOMY

* `var item = "chair";`

- equals `=` (assignment)
	- Here we are storing data to memory. 	
- `var`
	- We are declaring a variable
	- Using `var` we limit the variable to the current scope 
	- We will return to `scope` during the lesson on `functions`
- variable name
	- cannot begin with a number or include special character
	- camelCase
	- case sensitive 
- data, primitives
	1. Strings are text (within quotes)
	2. Numbers are digits
	3. Booleans are true and false
	4. Null is a deliberate assignment of no value
	5. Undefined is a value that has not been set 
- semicolon
	- The interpreter needs the semicolons 
	- Automatic Semicolon Insertion
	- You won't get a job if you don't write your semicolons
	- 'Minification' changes your code so you'd need 'em there

	
<br>

&#x1F535; **Activity (2 min)**

**variable assignment**

- Without running the following code, try to determine:

```
var a = 'gom jabbar';
var b = 'feel the sting';
var c = 'Baron';

a = b;
b = c;
c = a;
```

We can assign any value, including other variables

```
var tool = 'magnifying glass'
var spyglass = tool

spyglass 
=> "magnifying glass"
```

- What are the values of a, b, and c after the assignments are done?

- Run the code to verify.

<br>
<hr>


## PRIMITIVES (1 mins)

Primitives are the fundamental pieces of data we use in Javascript. There are **5** of them:

1. String
2. Number
3. Undefined
4. Null
5. Boolean

At the end of today during lab, you will make your own pick-a-path adventure to play in the Chrome console. Let's gather up the fundamental components (the primitives) we will need for our program.


## Strings (1 mins)

Strings are text. Surround them in quotes (single quotes are standard, but you can use double quotes). 


* `'This is a string';`


> We will want to have a character in our adventure who has a name, so we will want text: a string. We will also want to send messages to the user who is playing the game. We will also need strings to send ourselves messages to help debug the code.


**Concatenation (2 mins)**

JavaScript allows us to add strings together with `+`:
	
```
'hello' + ' world'
=> 'hello world'
```

<br>

### Assignment (5 min)

We can assign a string to a variable

```
var item = 'chair';

item 
=> "chair"
```

We can reassign the value of `item`:

```
var item = 'table';

item
=> table
```

- variable names
	- cannot begin with a number or include special character
	- camelCase
	- case sensitive 

<br>

**Interpolation (5 mins)**

We can insert values of variables into our strings

```
var adjective = 'beautiful';

'What a ' + adjective + ' day!!'
```

- Interpolation using ES6 string templates

```
var adjective = 'crummy';

`What a ${adjective} day!`
```

<br>

**Escape characters (1 min)**

```
var message = 'Ahoy there how\'s it goin\'?'
```
<br>

**String methods (3 mins)**

Strings come with built-in methods that we can use to manipulate the data.

You can find string methods here: 

`http://www.w3schools.com/js/js_string_methods.asp`

- `.toUpperCase()`
- `.toLowerCase() `

```
var firstName = "Paul"

firstname.toUpperCase();
=> PAUL
```

```
var lastname = "Atreides"

lastname.toLowerCase();
=> ATREIDES
```


<br>



&#x1F535; **Activity (5 min)**

* In Chrome console, set a variable `firstName` to a string. Then set another variable `lastName` to a string.

* Write an expression that sends a greeting with the `firstName` and `lastName` UPPERCASED. Use interpolation to put the message together. (eg: ``Hello there #{variable1.toUpperCase()} #{variable2. toUpperCase()}!`)

```
=> "Hello BARON HARKONNEN!"
```

<br>

&#x1F535; **Activity (5 min)**

FIGURE IT OUT

* You can assign variables to other variables. Eg. (`theSameItem = item`)

* What happens if you set `var fullName = firstName + lastName`? Try it out.

* Reassign `fullName` it so that there is a space " " between `firstName` and `lastName`, using interpolation. Bonus: Make it uppercase.

```
fullName
=> "BARON HARKONNEN"
```
<br>
<hr>

![](http://cdn.gamesocool.com/c/gs/cover/4f/adventure-time-finn-up/adventure-time-finn-up.jpg?v=1415081881)

## ADVENTURE

#### Let's begin our adventure! (1 min)

* Move from Chrome console to text editor

<br>

&#x1F535; **Setup (5 min)**

Inside the `student_labs` directory, make an `adventure` directory and go into it. Make the project files.

* `mkdir adventure`

* `cd adventure` 

* `touch index.html app.js`

<br>

&#x1F535; **Setup (5 min)**

* Link the markup and the script together:

```
<html>
<head>
	<title></title>
	<script type="text/javascript" src="app.js"></script>
</head>
<body>

</body>
</html>
```

* Load the file in Chrome. In atom, right click (ctrl + click) the html file name and select 'Copy Full Path`. Paste the link into Chrome.

<br>

&#x1F535; **Setup (10 min)**

* `console.log();`
	- Send messages to the console. Let's use it for debugging purposes. 

```
console.log('app.js');
```

We should see "app.js" appear in our Chrome console.
We can also use other console actions: `console.clear()`, `console.warn()`, `console.error()`

<br>


* `prompt();`
	
	- Ask Chrome to prompt the user with a text box.
	- We can capture the value of the text
	
```
var input = prompt();

console.log(input);
```

(Time: 10:00am)

<br>
&#x1F535; **Activity (10 min)**

**ADD STRINGS TO THE ADVENTURE**

* Send your user a header message about the adventure on which the user is about to embark.
* Send a prompt asking for your user's name
* Send a message welcoming the user with the input from the prompt

Example

```
console.log('app.js');

console.log('===========================');
console.log('LET'S GO ON AN ADVENTURE!!!');
console.log('===========================');

// get the name, a string, from a prompt
var name = prompt('What is your name?');

console.log(`Welcome ${name}!\n\n`);

```
(Break: back at 10:20)
<hr>

<br>

## Numbers (5 mins)
Numbers are digits. There are no quotes around a number primitive. Numbers can be evaluated in arithmetic expressions.

> We will want to give our character some hitpoints and/or damage points, so we will need Numbers. We might also want some random numbers in our game for dice rolls.

**Integers**

- Integers are whole numbers

**Floats** 

Floats are decimals

- Javascript is **not** good with numbers: all numbers are 64-bit floating point representations which (in base-2 with hardware limitations), leaves us with rounding errors.
	
```
0.1 + 0.2
=> 0.30000000000000004
```

Javascript is considered accurate up to about 15 digits

16 digits:

```
9999999999999999;
=> 10000000000000000;
```
<br>

**Arithmetic operators**

	- `+`, `-`, `*`, `/`, `%`

<br>

**PEMDAS (1 min)**

Example

```
5 + (2 + 5 * 3)
=> 22
```

**modulus `%` (4 min)**

Checks for a remainder after division

- check if numbers are even or odd
		
```
8 % 2
=> 0
```

```
9 % 2
=> 1
```

<br>

&#x1F535; **Activity (1 min)**

* Perform some arithmetic in the console - just do some stuff off the top of your head

Also, try

- 0 / 0
- Math.sqrt(-2)

<br>

**NaN (1 min)**

- is a special type of number value used to denote an unrepresentable value. 
- Javascript does not deal with imaginary numbers, therefore the square root of a negative number is NaN
- `NaN` is never equal to another `NaN`

<br>

**Compound assignment operators (5 min)**
 
```
var num = 4;
num = num + num;

is the same as:
num += num;
```

```
num = num * num;

is the same as:
num *= num
```

- Postfix increment `num++` and decrement `num--`
- Prefix increment `++num` and decrement `--num`

<br>

&#x1F535; **Activity (3 min)**

* set the number 5 to a variable
* multiply the number by itself using compound assignment
* increment the number by 1 using postfix or prefix

<br>
<hr>

#### Math.random() (10 mins)

`Math` is part of the Javascript standard library. You can use it to do more advanced mathematical operations.

More on `Math`:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

- Get a random decimal between 0 and 1

```
Math.random();
=> .229375290430
```

- Get a random decimal between 0 and 10 (excluding 0 and 10)

```
Math.random() * 10;
=> 0.6494652788842037
```

- Get a whole number between 0 and 10 (including 0 and 10), rounding down with `Math.floor()`:

```
Math.floor( Math.random() * 11 );
```

- Get a whole number between 1 and 10 using `Math.floor()` to round down

```
Math.floor( Math.random() * 10 ) + 1;
```

<br>

&#x1F535; **Activity (5 min)**

* generate a random decimal number between 0 and 1 (excluding both 0 and 1)
* generate a whole number between 1 and 100 (including 1 and 100) hint: use `Math.floor()`

<br>
<hr>


## ADVENTURE
**ADD NUMBERS TO THE ADVENTURE**

&#x1F535; **Activity (15 min)**

* After your welcome message, declare a `hitpoints` variable and give your user a random number of hitpoints between 2 and 12 (as if rolling two 6-sided die). The answer is below.

* Then, declare a `damage` variable and give your user a damage value equal to 1/3 of the hitpoints (less fortitude means wobblier elbows). The answer is below.

* Send your user a console.log with the current hitpoints and damage values

Example

```
console.log('app.js');

console.log('===========================');
console.log('LET'S GO ON AN ADVENTURE!!!');
console.log('===========================');

// get the name, a string, from a prompt
var name = prompt('What is your name?');

console.log(`Welcome ${name}!`);

// declare hitpoints: a random integer between 2 and 12
var hitpoints = Math.floor(Math.random() * 11) + 2;

// declare damage, a float taken from another value (hitpoints)
var damage = hitpoints / 3;

console.log(`You have ${hitpoints} hitpoints!`);

console.log(`You can do: ${damage} damage!`);
```
<br>
<hr>

(Time: 11:10am)

<br>

## Undefined and Null (5 mins)

- `undefined` is an uninitialized variable. A value hasn't been assigned yet.

- `undefined` has no meaningful value, and no meaningful operations can be done on it:

```
var nothing;

nothing
=> undefined
```

- `null` is a deliberate non-value. Can be used as a placeholder.
- `null` is nevertheless a value and can have meaningful operations performed on it:

- Weirdness: remember coercion with Numbers? Null and undefined can be coerced into strings too:

```
'' + null => "null"
'' + undefined => "undefined"
```

<br>

&#x1F535; **Ask (1 min)**

- What is the difference between null and undefined?

<br>

## DATA TYPES (5 min)

**typeof**

- check your datatypes with the `typeof` keyword

	Example
	- `typeof "wobbly elbows"`

	> string

- typeof NaN
	https://ariya.io/2014/05/the-curious-case-of-javascript-nan

<br>
	
**type conversion**

- `parseInt()` converts valid strings into numbers
	
	Example
	- `parseInt('7')`
	
	> 7
	
<br>

- `.toString()` converts numbers into strings

	Example
	- `(888).toString()`
	
	> "888"

<br>

&#x1F535; **Activity (3 mins)**

Use `typeof` to check the data types of each of the following, but try to guess what the data type will be in advance:

Example
- `1000`

```
typeof 1000;
=> "number"
```
- `1.25928`
- `(1.25928).toString()`
- `"1.25928"`
- `parseInt("1.25928")`
- `"cheese"`
- `Infinity`
- `false`
- `NaN`
- `undefined`

<br>


##### Coercion (5 mins)
- Strings and numbers are different datatypes, but Javascript is both kind enough and weird enough to convert one to the other on its own if it sees fit.
	- `+` coerces number into string
	- `*` coerces string into number
	- `\` coerces string into number
	- `-` coerces string into number 

```
5 + 5 + 'j'
'j' + 5 + 5
'5' + 5
5 + '55'

=> result is a string
```

```
5 * '55'
'10' / 2
'10' - 2

=> result is a number
```
<br>
<hr>
License
<hr>