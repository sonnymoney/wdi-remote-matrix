![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Scope<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Topics: Javascript intro: Scope <br>
<hr>

## Lesson Objectives

_After this lesson, students will be able to:_

- Explain the difference between local and global scope
- Write a function that can access globally scoped variables
- Write a function that cannot access a variable scoped locally in another function
- Write a function that _can_ access a variable locally scoped in another function
- Use `var` to keep variables scoped to the proper context

<hr>

### SETUP (9 mins)

* In your `student_labs` directory for today, in `unit_01/w02d01/student_labs`:
* Create a file called `scope.js`
* Write a console.log to test that it will run
* Run the file in Terminal with `node scope.js` -- you should see the console.log appear

<hr>

# SCOPE (2 min)

Scope is the restriction of where in your code your variables can be used. If you try to access a variable outside of its _scope_, it should return undefined. This is a good way to compartmentalize our variables.

There are two kinds of scope in Javascript:

* Global scope
* Local scope

## LOCAL SCOPE

&#x1F535; **Code Along (8 min)**
When variables are declared inside functions.

```
var someFunction = function() {
	var item = 'chair';
	return item
}
```

The value of the `localScope` variable is not accessible outside the function. If we make another function:

```
var anotherFunction = function() {
	return item
}
```

The `item` variable is not visible inside `anotherFunction` because it is locally scoped only to `someFunction`. Functions are _exclusive_. The technical term / jargon for this is **lexical scope**. We scope variables locally using functions (and no other construct).


<br>
3:19
## GLOBAL SCOPE

&#x1F535; **Code Along (8 min)**

When variables are declared outside functions, the value of the variable is accessible to all functions. There is no restriction or exclusivity.

```
var globalVariable  = "Hey! I am in the global scope!!!!!!";

var someFunction = function() {
	return globalVariable
}
```

But if I locally scope a variable, it is not visible in the global scope:

```
var thisFunction = function() {
	var demo = "Can you see me in the global scope?"
}

// outside the function, in the global scope:

console.log(demo)
=> undefined
```

RECAP:

* Global scope is the the part of your code _outside_ of a function
* Local scope is the parts of your code that are _inside_ functions

<br>
3:27

&#x1F535; **Activity (5 min)**

* Write a function `iSeeYou` that has no parameters and simply returns the value of a variable `var test = "I am here"` defined in the global scope. Define the globally scoped variable before you define your function.


&#x1F535; **Extra Activity**

* Write a function `iCannotSeeYou` that tries to return the value of a variable that it cannot see. _Hint:_ you could write a function that tries to access the value of a variable that was defined in another function. 

<br>
<hr>
3:32

## FUNCTIONS WITHIN FUNCTIONS

#### WATERFALL (3 min)

Visualize scope accessibility like a waterfall: Water flows down but does not flow up (at least, on Earth under our gravitational conditions)

The values of globally defined variables flow down to all functions.

The values inside functions do not flow up to the global scope.

You can have **functions within functions**, and each nested function has its own scope that obeys the waterfall principle. If you define a function inside another function, the outside function can pass its values to the inner function, but the inner function cannot pass its value back up to the outer function.

&#x1F535; **Code Along (8 min)**

```
var outerFunction = function() {
	var outerVar = "defined locally within outerFunction";
	
	var innerFunction = function() {
		console.log(outerVar);
	}
}
```

But whatever is defined inside the innerFunction, obeying the waterfall principle, is not visible to the outer function:

```
var outerFunction = function() {
	var outerVar = "defined locally within outerFunction";
	
	var innerFunction = function() {
		var innerVar = "defined locally within innerFunction";
	}
	
	console.log(innerVar);
}
```

3:40

&#x1F535; **Activity (10 min)**

* Write a function `parent` with no parameters that sets a variable `var parentVar = true;`
* Write a function inside `parent` called `child` with no parameters that console.logs the value of `parentVar`
* Inside the `child` function define a variable called `var childVar = true;`
* Try to console.log the value of `childVar` inside the `parent` function

<br>

3:50

## `var` (2 mins)

`var` is what gives a variable its scope. If you omit `var`, the variable will be automatically considered global. Always use `var` to avoid weird scoping errors, including when setting the start parameter of your _for loops_. If you have a _for loop_ inside a function, you will want the values of the loop not to pollute the global scope.

&#x1F535; **Code Along (10 min)**

```
var list = function() {
	for (var i=0; i < 10; i++) {
		console.log(i);
	}
}

list();

// global scope
console.log('Value of i: ', i);
```

Omit `var` and see the difference.

<br>

**POLLUTION (5 mins)**

You do not want your global scope to be **polluted**. There are reason for not polluting your global scope.

* Global variables can be overwritten or misconstrued elsewhere
* Potentially causing unwanted, hard to track bugs
* Namespace
* Memory / garbage collection

http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted

<br>

4:05

## VAR AND HOISTING (7 mins)

Why save a function to **var**? What about this alternative syntax:

```
function noVarHere() {
	// stuff
}
```

This syntax is called a _function declaration_. The reason why we are not using _functiona declarations_ for now is due to _hoisting_. Hoisting is when Javascript moves all declarations to the top of the current scope, allowing you to _use_ code seemingly out of order. When you declare a function using the above syntax, the declaration is _hoisted_, meaning you can invoke the function before it has been defined:

```
outOfOrder();

function outOfOrder() {
	console.log("beans");
}

=> "beans"

// the function can be invoked before it is defined
```

This is fine, but we want you to think about the sequence of your code. Let's write our functions as _function expressions_ for now, the way we have been doing:

```
funcExpression();

var funcExpression = function(){
  console.log("beans");  
}

=> TypeError: funcExpression is not a function

// the function cannot be invoked before it is defined
// better to keep things in order for now
```

If you are really interested in the fine details of function expressions vs declarations, have a read:

http://stackoverflow.com/questions/336859/javascript-function-declaration-syntax-var-fn-function-vs-function-fn

<br>

&#x1F535; **Activity (4 min)**

* Write a simple function that can be invoked before it is defined
* Change this function so that it cannot be invoked before it is defined 

<br>
<hr>

## Priority (2 mins)

What if you have a global variable with the same name as function parameter? Which one will the function use?

Example

```
var name = "Thomas P";

var printName = function(name) {
	console.log(name);
}

printName("Darth Vader");
```

The argument passed to the function takes priority over the globally scoped `name` variable.

Locally scoped variables take priority in a function over globally scopes ones.

always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain.


<br>
<hr>