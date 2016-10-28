![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Intro to JS<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: Javascript Intro <br>
<hr>

# INTRO TO JS


### Lesson Objectives
_After this lesson, students will be able to:_

- Explain why we are learning Javascript
- Run single-line Javascript code in the Chrome console
- Write and evaluate expressions using four of the five primitives: strings, numbers, null, and undefined
- Use methods on strings and numbers
- Practice the Math standard library
- Write an expression with coercion

<hr>


### What is Javascript? (3 min)

Javascript is a programming language. It is written as a sequence of commands that can be read and executed by a program. For Javascript this typically means Node or Chrome will read the code and figure out what to do with it.

Javascript was originally developed for Netscape Navigator 2.0 in 1995! The prototype for Javascript was written in 10 days by one guy. When it was being made it was called Mocha, then LiveScript, then renamed JavaScript for marketing purposes. It has little in common  with the programming language called Java.


### Why Javascript? (3 min)

Javascript is the only programming language that runs natively in web browsers. We don't really have a choice. We really want to learn JavaScript. Maybe in the future some other language will replace it, but JavaScript is being updated all the time, so it looks like it will be around for a while, and ES6 already has good support.

When we move into servers, you'll see that because of Javascript's prevalance we can use Node to write Javascript for the back-end, not just for browsers. All in all, learning Javascript is an awesome investment. <br><br>

<br>
<hr>

10:06

### CHROME CONSOLE - single-line code (2 min)

url `about:blank`

Open Javascript console `option + command + J`



# PRIMITIVES - STRINGS AND NUMBERS

**Strings** are text. Surround them in quotes (single quotes are standard, but you can use double quotes). 

* `'This is a string';`

**Numbers** are digits. There are no quotes around a number primitive. Numbers can be evaluated in arithmetic expressions.

* `2 + 2`;

**Variables (5 mins):** We can assign strings and numbers to variables. Using the assignment operator `=`, we can store data to memory:

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

Or, set a number:

```
var num = 2000 * 2;

num
=> 4000
```

10:11

**Variable names**

	- cannot begin with a number or include special character
	- camelCase
	- case sensitive

**Semicolons**

	- The interpreter needs the semicolons 
	- Automatic Semicolon Insertion
	- You won't get a job if you don't write your semicolons
	- 'Minification' changes your code so you'd need 'em there

10:16

<br>

&#x1F535; **Activity (2 min)**

You can assign variables to other variables!

**Variable assignment**

Without running the following code, try to determine:

```
var a = 'gom jabbar';
var b = 'feel the sting';
var c = 'Baron';

a = b;
b = c;
c = a;
```

Test out your answer by checking in the Chrome Console

10:18

## STRINGS

**Concatenation (2 mins)**

JavaScript allows us to add strings together with `+`:
	
```
'hello' + ' world'
=> 'hello world'
```

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
=> atreides
```
<br>

&#x1F535; **Activity (5 min)**

* In Chrome console, set a variable `firstName` to a string. Then set another variable `lastName` to a string.

* Write an expression that sends a greeting with the `firstName` and `lastName` UPPERCASED. Use interpolation to put the message together. (eg: ``Hello there #{variable1.toUpperCase()} #{variable2.toUpperCase()}!`)

```
=> "Hello BARON HARKONNEN!"
```

<br>

&#x1F535; **Activity (5 min)**

FIGURE IT OUT

* You can assign variables to other variables. Eg. (`theSameItem = item`)

* What happens if you set `var fullName = firstName + lastName`? Try it out.

* Reassign `fullName` so that there is a space " " between `firstName` and `lastName`, using interpolation. Bonus: Make it uppercase.

```
fullName
=> "BARON HARKONNEN"
```
<br>
<hr>

10:39

## Numbers (5 mins)

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
10:50

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

10:52

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

**Postfix and prefix (1 min)**

- Postfix increment `num++` and decrement `num--`
- Prefix increment `++num` and decrement `--num`

<br>

10:58

&#x1F535; **Activity (3 min)**

* set the number 5 to a variable `num`
* multiply the variable by itself using compound assignment
* increment the variable by 1 using postfix or prefix

<br>
<hr>
11:01


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

11:11

&#x1F535; **Activity (5 min)**

* generate a random decimal number between 0 and 1 (excluding both 0 and 1)
* generate a whole number between 1 and 100 (including 1 and 100) hint: use `Math.floor()`


&#x1F535; **Activity (4 min)**

RESEARCH

* Use `Math.sqrt()` to find the square root of `Math.PI`
* Use `Math.pow()` to raise 5 to the power of 4   

<br>
<hr>

11:16 Break until 11:26

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

```
var nothing = null;

nothing
=> null
```

<br>

&#x1F535; **Ask (1 min)**

- What is the difference between null and undefined?

<br>

11:32


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

11:45

Coercion exercise


<br>
<hr>
License
<hr>