![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Conditionals<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: Intro to Booleans and Conditionals <br>
<hr>

# CONDITIONALS

### Lesson Objectives
_After this lesson, students will be able to:_

- Write and evaluate Boolean logic
- Explain why we would use 'control flow' in our programs
- Write a simple if statement and differentiate between the code as it looks, and the process of the code running
- Write an if / else statement
- Write an if / else if / else statement

<br>
<hr>

## CONTROL FLOW (5 mins)

For today's lab you will make a pick-a-path adventure game to play in the console.

> In our adventure, we want our player to be able to 'pick a path'. We can do this by selecting which lines of code to execute. We will do this using `booleans` within `conditionals`. We can set up a branching tree-like structure and control the flow of our code. If the boolean within our condition is `true`, a branch will execute. If it is `false`, it will not execute. This is an example of `control flow`.

Control Flow is the order in which individual statements or instructions are executed. There are three forms of Control Flow:

- **Conditionals** - skip lines of code
- **Loops** - repeat lines of code
- **Functions** - save and later deploy lines of code

Before we write in some control flow, let's take a closer look at the boolean logic that will drive our conditionals.

<br>
<hr>

2:35

# BOOLEANS (5 mins)

* Booleans allow us to set `true` and `false` values. With true and false values, we can control the flow of our programs.

* Analogy: open and closed gates. You cannot go through a gate that is closed (false value). An open gate allows information to flow. This is fundamental to computer science (binary values, transistors)  

* Boolean logic is a type of logic that deals with binary values, and is named after George Boole who invented it.

Declaring Booleans:

```
true
=> true
```

```
false
=> false
```

```
var something = true;
var notSomething = false;
```

#### NOT
- `!` **not** sometimes called a 'bang': changes Boolean value to its opposite.

```
!true;
=> false
```

&#x1F535; **Ask (2 mins)**

```
!something
=> false
```

```
var toggle = true
toggle = !toggle
```

2:42
<br>
<hr>

## Equality operators (5 mins)

`==`, `!=`, `===`, `!==`

Equality operators are **not** the same as the _assignment_ operator `=`

- `==` **equality**: compares left-hand and right-hand and checks for equality. Returns a Boolean value.
- `!=` **inequality**: compares left-hand and right-hand and check if inequality. Returns a Boolean value.

```
true == true
=> true
```

```
true == false
=> false
```

&#x1F535; **Ask (2 mins)**

```
false == false
=> true
```

```
true != true;
=> false
```

```
true == !true
=> false
```

Can be used with numbers:

```
1 == 1
=> true
```

And with strings:

```
"hello world" == "hello world"
=> true
```

2:49

- `===` **strict equality**: same as equality, but does not coerce
- `!==` **strict inequality**: same as inequality, but does not coerce 

```
5 == '5';
=> true
```

```
5 === '5';
=> false
```

&#x1F535; **Activity (2 mins)**

* Check: is the number 1 equivalent to the number 1?
* Check: is the string "beans" equivalent to the string "soup"?
* Check: is 5 + 5 * 3 equivalent to (5 + 5) * 3?
* Check: is 9 strictly unequal to false?
* Check: is NaN equivalent to NaN?

2:53

## Relational operators (3 mins)

`>` - greater than

`<` - less than

`>=` - greater than or equal to 

`<=` - less than or equal to


```
5 > 2;
=> true
```

```
5 <= 5;
=> true
```

- strings are compared by alphabetical precedence

```
`'a' > 'b'`;
=> false
```

```	
`'z' > 'abc'`
=> true
```


&#x1F535; **Activity (3 mins)**

* Check: is -10 greater than or equal to -100?
* Check: is Infinity greater than or equal to -Infinity?
* Check: is "McDonald's" greater than "Burger King?"

<br>
<hr>

2:59

## Logical operators (10 min)

`&&`, `||`

- `&&` **and**: evaluates to `true` if both sides are true. It does not check for equality! Rather, **and** evaluates the truth of the statement, and will return the value of one of the operands.

```
false && false
=> false
```

^^ each side is the same (they are equivalent), but in this case, both sides are not true.
If an `&&` statement begins with `false`, it automatically evaluates to false.

```
true && false
=> false
```

```
var a = true;
var b = false;

a && b
=> false
```

<br>

- `||` **or**: evaluates to true if either side is true.

```
true || false
=> true
```

```
false || false
=> false
```

```
var x = false
var y = false

x || y
=> true
```

3:10

### Boolean order of evaluation (2 min)

1. `>, <, >=, <=`
2. `==, ===`
3. `&&`
4. `||`

3:12

<br>

&#x1F535; **Activity (5 mins)**

Try to guess the result before you check it. If it is not what you expected, try to find out why not

* Check: `!false && true`
* Check: `false || true`

```
var a = true;
var b = false;
```
* Check: `a && a == b`
* Check: `!true || !false && !false`
* Check: `8 > 1 && true || false`

<br>
<hr>

3:18

<br>
<hr>

## Truthiness (7 mins)

All values in JavaScript have an implicit 'truthiness'. They can be evaluated as either true or false. In effect, every value in Javascript is converted into a Boolean when it is checked as an expression of truth.

##### All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

<br>

&#x1F535; **Activity (1 min)**
Try it out in the console:

```
Boolean("");
Boolean(null);
Boolean(0);
```
<br>

##### All other values are implicitly true

&#x1F535; **Activity (1 min)**
Try it out in the console:

```
Boolean("hi");
Boolean(1);
Boolean(true);
```

3:27

<br>  
<hr>


# CONTROL FLOW WITH CONDITIONALS

3:30

&#x1F535; **Setup (8 mins)**

In the `student_notes` directory for today, in `unit_1/w1d4/student_notes`:

* Make a directory `conditionals`
* Go into the `conditionals` directory
* Make an index.html
* Make an app.js
* Link them together
* Add a console.log to app.js
* Open index.html in the browser and check the console

<br>
<hr>

3:38

## IF STATEMENT

**Conditional Pseudo-code (2 mins)**

Basic if statement

```
if (BOOLEAN EXPRESSION) {
	// run this code
}
```

The curly braces denote a `block`. The `block` will run if the `expr` evaluates to `true`.

Let's investigate what that means by writing it into our adventure.

<br>

&#x1F535; **Code Along (5 mins)**

Make a prompt that asks for your name.

```
prompt('What is your name?');
```

We can save the value of the prompt to a variable.

```
var input = prompt();
```

We can add a basic **if statement** to add control flow depending on the input.

```
if (input === 'Zuul') {
	console.log("ZUUL IS IN");
}
```

- If the input name is Zuul, the code is run. Otherwise, the code never runs.

- Control flow with conditionals means the that not every line is run. The code in front of us is separate from the process going on behind the scenes.
- Lines of code will be excluded during execution in order to take us on a particular 'branch'
- Which lines are excluded depends on Boolean values, and whether expressions evaluate to `true` or `false`


Let's take a closer look at the `expression` that we used in our conditional. The expression should only ever evaluate to `true` or `false`. True and false are Boolean values.
  
<br>
<hr>
(Back to Chrome console)

3:45

<br>
<hr>

##IF, IF / ELSE, IF / ELSE IF, ELSE (5 mins)


We have already seen a single _if_ statement

```
if (name === 'Zuul') { ... }
```

The code within the block will only run if the expression within parentheses evaluates to true.

```
if (true && true) {
	console.log('hey!')
}
```

```
var runProgram = false;

if (runProgram) {
	console.log('I\'m running here');
}
```

We can create more branches within our conditional:

<br>

3:50

**IF / ELSE (5 mins)**

Else is a catch-all. The block will be run if all other conditions evaluate to `false`.

Pseudo code:

```
if (BOOLEAN EXPRESSION) {
	// run this code
} else {
	// if all conditions are false, run this _else_ block
}
```

<br>

&#x1F535; **Code along (2 min)**

```
var runProgram = false;

if (runProgram) {
	console.log('first block');
} else {
	console.log('else block');
}

```

3:57
<br>

**IF / ELSE IF / ELSE (5 mins)**

Else if provides more options

Pseudo code:

```
if (the bathtub is full) {
	turn off the tap
} else if (the tap is not on) {
	turn on the tap
} else {
	don't touch the tap
}
```

&#x1F535; **Code along (2 min)**

```
var num = 21;

if (num > 21) {
	console.log('num is greater than 21');
} else if (num == 21) {
	console.log('num equals 21');
} else if (num < 21) {
	console.log('num is less than 21');
} else {
	console.log('this is redundant, but good to have');
}
```

- Order matters

<br>


=========================================

4:10

&#x1F535; **Activity (20 mins)**

FIGURE IT OUT

Write a conditional to check if a potential beer buyer is 21 or over.

In `student_labs` make a file `beer_buyer.js`. Run the file in Terminal with `node beer_buyer.js`

Make a variable called `age` and set it to 21. Write the following conditional piece by piece and adjust the value of age to test your conditional when you run the file.

FIGURE IT OUT 

Figure out how to order the conditions to get the desired result. **order matters**. Test your conditional thoroughly. You don't want to make any mistakes with your beer buyer!

- If they are 21 or over, tell them they can buy the beer. Else, they are too young, and cannot buy the beer.
- If they are under the age of 9, ask them where are their parents .. ?
- If they are exactly 2, tell them that toddlers are not allowed, but they can still have some beer outside
- If they are 0 or under, tell them they do not exist yet and cannot have any beer

Test your code every step of the way to make sure you get the desired result, and experiment and adjust accordingly.


<br>
<hr>
License
<hr>






