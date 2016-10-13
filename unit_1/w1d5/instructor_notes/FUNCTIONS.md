![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-R2D2

<hr>
Title: Functions and Scope<br>
Type: Lesson<br>
Duration: 1hr 45mins<br>
Creator: Thom Page<br>
Topics: Javascript intro: functions <br>
<hr>

## Lesson Objectives


_After this lesson, students will be able to:_

- Write and execute a function
- Explain the difference between defining a function and invoking it
- Explain the difference between an argument and a parameter
- Write functions that manipulate parameters
- Use `return` to give the function output
- Know when to console.log the output of a function

<hr>

## SETUP

* In the `student_labs` directory for today, `unit_01/w01d05/student_labs`:
* Create a file `functions.js`
* Write a console.log inside `functions.js` so we can test if the file runs
* Run the file in Terminal with `node functions.js`

<br>
<hr>

# FUNCTIONS

## CONTROL FLOW (3 mins)

Functions are another form of control flow along with conditionals and loops. 

Conditionals _skip_ lines of code within a block `{ ... } ` if a condition is not true:

```
if (expr) {
	// code might get skipped
}
```

Loops _repeat_ lines of code within a block `{ ... }` according to our instructions:

```
for (var i=0; i < 100; i++) {
	// code is repeated 100 times
};
```
<br>

## USING A FUNCTION FOR CONTROL FLOW (2 mins)

We can also control the flow of our code with functions. Functions act like variables and _store_ code within a block `{ ... } ` for use later.

syntax:

```
var myFunction = function() {
	// lines of code 
	// saved to myFunction variable
};
```

We can then deploy our saved code whenever we want by invoking the function using parentheses:

```
myFunction();
```
<br>

## WHY FUNCTIONS? (2 mins)

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

<br>
<hr>

## DEFINING A FUNCTION (1 min)

Defining a function is like capturing a Pokémon. You can save it for later when the time is ripe.

<br>

&#x1F535; **Code-Along (3 min)**

Write a function that logs "Gotta catch 'em all" to the console.

```
var anyThing = function() {
	console.log('Gotta catch \'em all');
};
```
<br>
<hr>

## INVOKING A FUNCTION (1 min)

Invoking a function is like letting your Pokémon out temporarily to perform a task:

```
anyThing();
anyThing();
anyThing();
```

There is a huge difference between defining a function and invoking it. If the parentheses are not included, the function will not run.

<br>

3:12

&#x1F535; **Activity (4 min)**

* Write a function that logs "I come from out of a function!" to the console.
* Invoke the function


&#x1F535; **Activity (4 min)**

* Write a function that logs the sum of 2 + 2
* Invoke the function

&#x1F535; **Activity (2 min)**

EXPERIMENT

* Can you invoke a function _before_ you have defined it? Try placing the invocation for one of your functions above the function definition. Try it out!

<br>
<hr>

3:24

## ARGUMENTS AND PARAMETERS (5 mins)

We can write functions that take in a type of variable called a **parameter**. By giving our functions some kind of variable input, we make them much more flexible. In this example, the parameter is arbitrarily called `name` (we can call our parameters whatever we want - whatever makes semantic sense).

&#x1F535; **Code-Along (4 min)**

```
var nameIt = function(name) {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```
nameIt("Leeroy");
```

We can continue to invoke the function with whatever **arguments** we want:

```
nameIt("Agamemnon");
nameIt("Corn Shucker");
nameIt("Gubernatorial");
```

Each time, the output of the function will change to reflect the argument.

<br>

&#x1F535; **Activity (5 min)**

* Write a function that takes a parameter. The function should simply console.log the value of the parameter.
* Invoke the function with an argument.

3:33

**Multiple parameters (5 mins)**

We can also use multiple parameters in our functions. A function can take any number of parameters.

```
var multiply = function(num1, num2) {
	console.log(num1 * num2)
}
```
When you invoke the function, you generally want to supply the right number of arguments.

```
multiply(4, 4)

=> 16
```

<br>

3:38

&#x1F535; **Activity (10 min)**

**In Pairs**

Write the following functions and test to make sure they work:

* Write a function called `calculateArea` that takes two parameters `width` and `length` and multiplies them. This will give us the area of a rectangle.
* Invoke the function a couple of times with different arguments each time

* Write a function that takes three parameters (numbers), sums them, and converts the sum into a string (eg. `"123"`)
* Invoke the function a couple of times with different arguments each time

EXTRA:

* Write a function that takes two parameters (strings) and console.logs whether the two strings are identical

EXPERIMENT

* What happens if you supply more arguments than there are parameters?
* What happens if you supply fewer arguments than there are parameters?


<br>
<hr>
3:48

## RETURN (10 mins)

* `return` gives a function its value.
* `return` stops the function.

We specify the output of a function with the `return` statement. The `return` statement is different from `console.log()` in that we can use the _return value_ of a function to pass as data, whereas we cannot with a `console.log()`.

A contrived example:

```
var ten = function() {
	return 10;
}
```

```
console.log(8 + ten());

=> 18
```

This is the main difference between `return` and `console.log()`. The output value of a function can not come from a console.log(), unless we are simply checking for 'truthy' or 'falsy' values.

```
var ten = function() {
	console.log(10);
}
```

```
console.log(8 + ten());

=> 10
=> NaN
```

If you return the value of a function in Chrome console, it will no longer say `undefined` underneath your result. 

**RETURN** sends the value of your function immediately. You can use **return** to terminate the function.

Example:

```
var example = function(input) {

	if (input == "none") {
		return 0;
	} else {
		return 1;
	}

};
```

```
example("none")
=> 0

example("two");
=> 1
```

Sometimes a returned value will not appear in your console. This is normal. A return is not a console.log. To see the result of an invoked function, you will want to console.log the result of the function:

```
console.log(example("one"));

=> 1
```

<br>
4:00

&#x1F535; **Activity (20 min)**

**In Pairs**

PROBLEM SOLVING

* Write a function `toThePower` that takes two parameters (numbers). The function should `return` the first number raised to the power of the second number.

* Write another function after `toThePower`. This function should be called `plusOne`. `plusOne` should take the return value of toThePower and add 1 to the result.

* Write a function `Palindrome` that checks whether a string is a palindrome. A palindrome is the same forwards as it is in reverse. The function should return either `true` or `false`.


<br>
<hr>


## INVOKED VS REFERENCED FUNCTIONS (5 mins)

If you try to run your function without a `()`, you will see the function itself appear. 

![referenced](https://i.imgur.com/48sQMnG.png)

Invoked function, runs immediately:

```
callFunc();
```

Referenced function, does not run (yet):

```
callFunc;
```

We will learn more about _referenced_ functions next week when we talk about **callbacks**. For now, invoke your functions to get them to work.

<br>
<hr>

## ARGUMENTS (5 mins)

If we supply fewer arguments than the function expects, the function will still run, but will result in `undefined` or result in errors related to undefined values. 

```
var blep = function(param1, param2) {
	console.log([param1, param2]);
};
```

```
blep("mlem");
=> ["mlem", undefined]
```

If we supply more arguments than the functions expects, the function will still run, and will ignore the extra arguments.

The upshot is that we can invoke a function with as many or as few arguments as we choose, and the function will run. Whether or not it _behaves_ correctly is up in the air.

<br>

&#x1F535; **Activity (7 min)**

**Research**

There is a way to list all of the arguments passed to a function. It is called `arguments`. Research `arguments` and use it to log the _number of arguments_ passed to a function.

<br>
<hr>





	
