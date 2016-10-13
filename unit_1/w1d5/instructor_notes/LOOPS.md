![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-R2D2

<hr>
Title: Loops<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: Javascript intro: loops <br>
<hr>

# LOOPS

### Lesson Objectives
_After this lesson, students will be able to:_

* Write a while loop that counts numbers
* Write a for loop that counts numbers
* Write a for loop that iterates over an array
* Begin writing loops in conjunction with other code

<hr>

### SETUP (9 mins)

* In the `student_labs` folder for today: `unit_01/w01d05/student_labs`, make a file called `loops.js`
* Open `loops.js` in Atom and write a console.log to test that the file runs
* Run the file in your Terminal with `node loops.js`. You should see the output of the console.log in your Terminal

<br>
<hr>

11:49

## DRY (6 mins)

_Why_ are we learning loops?

Don't Repeat Yourself

What if we needed to write a program that counts from 1 up to 1000? We could set about doing this:

```
console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);
console.log('The number is: ' + 5);
// etc.
```

Are we really going to write 1000 lines of code? Programmers are `lazy`. They do not want to write 1000 lines of the same thing. Instead, programmers try to find efficient shortcuts, and luckily, we can use `loops` to perform repetitive tasks.

Example of a loop that counts up to 1000:

```
for (var i=1; i <= 1000; i++) {
	console.log(i);
}
```
We could write three lines of code to count up to 1000, instead of writing 1000 lines of code.


11:55


## CONTROL FLOW (5 mins)

Remember with conditionals, the code in front of us is not the same as the process that runs in the background. 

Conditional pseudo code:

```
if (expr) {
	// run this code
} else {
	// run this code instead
}
```

The code between the curlies is called a `block`. With conditionals, we tell the program to _ignore_ or _skip_ a block.

With loops, we tell the program to _repeat_ a block.

While loop pseudo code:

```
while (expr) {
	// repeat this code
};
```

<br>
<hr>

12:03

## _WHILE_ LOOP

&#x1F535; **Code Along (5 min)**

A while loop that runs only while `runProgram` is true.

```
var runProgram = true;

while (runProgram) {
	console.log("The program is running");
	runProgram = false;
}
```

A while loop runs while an expression is true, and only while it is true. The process or execution happens 'in the background', in the order which you have instructed. You need to imagine a loop, run it in your mind.

12:10

&#x1F535; **Code Along (5 min)**

A while loop that counts from 1 to 100

```
var num = 1;

while (num <= 100) {
	console.log(num);
	num++;
}
```

Note that a variable we plug into the _while_ loop is defined _before_ the loop.

12:15

**Infinite loops (2 mins)**
A while loop has 'baggage' in that it needs a way to stop running, otherwise it will cause an infinite loop and might crash the browser or cause an error in Node. In this case, the variable `num` is deliberately increased each time so that the condition `num <= 100` can eventually be met, causing the loop to terminate.

Infinite loop (has no exit condition)

12:12

&#x1F535; **Ask (2 min)**

```
var runProgram = true;

while (runProgram) {
	console.log("Hey, I'm just a placeholder string");
}
```

An infinite loop often causes a 'stack overflow'.

12:14

&#x1F535; **Activity (5 min)**

- Write a _while_ loop that counts up from 0 to 1000

Pseudo code:

```
var some number equals a number <--- declare the number where the loop will begin

while (some number is less than some other number) {
	console.log the current number in the loop
	increase the number
}
```
12:19

&#x1F535; **Activity (5 min)**

- Write a _while_ loop that counts down from 100 to 1 

12:24

EXTRA ACTIVITY: FIGURE IT OUT

&#x1F535; **EXTRA Activity (9 min)**

FIGURE IT OUT

- Set a variable `runProgram` to true
- Write a _while_ loop that prints the message "still running . . ." while `runProgram` is true. Inside the loop, give `runProgram` a 50/50 chance of turning `false` each time the loop runs. Do not run the loop until you know it is possible for the loop to end.
- Bonus: Print the number of iterations of the loop when the loop is finished

<hr>

<break at 12:25>
<back at 12:35>

## _FOR_ LOOP (2 mins)

A _for_ loop does the same thing as a while loop, but all the 'baggage' is conveniently compacted into the syntax, leaving less room for infinite loops. We don't have to declare any variables outside of the loop like we had to do with _while_ loops.

_For loops_ are what we will use almost all of the time.

<br>

&#x1F535; **Code along (4 min)**

_for_ loop that counts from 0 to 1000:

```
for (var i=0; i <= 1000; i++) {
	console.log(i);
}
```

12:41

**DISCUSS (5 mins)**

there are three parts to the 'control panel' of the loop.

1. some initial code supplied to the loop -- usually a numerical starting value of the loop
2. the condition under which the loop runs -- it will run while the expression is false
3. a repeating expression that runs at the end of each loop -- usually an instruction to increase the numerical starting value

<br>
12:46

&#x1F535; **Activity (5 min)**

* Write a _for_ loop that counts from 0 to 100

12:51

&#x1F535; **Activity (5 min)**

* Write a _for loop_ that counts to the square root of 90,000 (ninety thousand). _hint_ use Math.sqrt in your for loop control panel

12:56

&#x1F535; **Extra Activity (5 min)**

FIGURE IT OUT

* Write a _for loop_ that counts from 0 to 1000, and will only print odd numbers. _hint_ use a conditional inside the loop.

<br>
<hr>

### Use a _for_ loop to iterate over an array (4 mins)

We can use the value of `i` for clever purposes such as accessing elements of an array. This is one of the most common uses of a _for loop_. With the loop, we can _iterate_ over each index.

1:00

&#x1F535; **Code along (9 min)**

_for_ loop that uses the value of `i` to print each item from an array:

```
var bigLifts = ["Squats", "Deadlifts", "Bench Press", "T-Bar Rows"];

for (var i=0; i < bigLifts.length; i++) {
	console.log(bigLifts[i]);
}
```

What happens if we just console.log the value of `i` within the loop?

Note that `i` starts at 0 to begin at index 0. The loop continues while `i` is _less than_ the length of the array. The array might be of length 9, but its indexes will only go up to 8.

<br>

1:09

&#x1F535; **Activity (5 min)**

With the following array:

```
var items = ["table", "chair", "rupees", 
             "magnifying glass", "map", 
             "glass of fortified wine", 
             "silver amulet"];
```

* Write a _for_ loop that prints each item to the console 

<br>
1:14

&#x1F535; **Activity (5 min)**

With the following array:

```
var squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

Write a _for_ loop that prints the square root of each number, _and_ prints the current index number

<br>
1:19

&#x1F535; **Extra Activity (5 min)**

With the following array:

```
var bools = [true, false, true, true, false, true, false, true, false];
```

Write a _for_ loop that will change each `true` to `false` and each `false` to `true`. Log each change to the console.

<br>
<hr>

### BREAK (3 mins)
You can exit a loop before it has finished by using `break`

Example -- this loop will terminate when the iterator gets to 3:

```
for (i = 0; i < 100; i++) {
    if (i === 3) { 
    	break; 
    }
    console.log(i);
}

console.log('the loop has ended');
```

<br>
<hr>

## ADVENTURE

&#x1F535; **Activity (30 min)**

Breakout Rooms in threes

###### MAKE A _FOR_ LOOP TO PUT INTO THE ADVENTURE LATER 

###### The loop will have conditionals within it

Inside `student_labs` for today, make a file `adventure_loop.js`. Run the file with `node adventure_loop.js`

* Make a variable `hitpoints` and set it to 10
* Make an array called `hoard` that contains different monsters such as 'ghoul', 'goblin', 'vampire', 'demon', 'eyeball'
* Your adventurer has been ambushed and must fight each monster in the hoard!
* Iterate over the `hoard` array with a _for loop_. In turn, each monster will attack the player as that monster is called from within the array. Inside the loop:
	* Announce which monster is attacking!
	* Randomly choose whether the player or the monster has done damage to the other (use a conditional with `Math.random()` to decide which 'path' the conditional will take)
	* If the player does damage, send a message that the player has struck the (monster name)
		* change the monster's value to `null` within the array
	* If the monster does damage, send a message that the (monster name) has struck the player
		* reduce the player's hitpoints by 1 (using a postfix or prefix operator) and tell the player how many hitpoints remain
		* if the player's hitpoints are now zero, send a message telling the player that they have succumbed. Use `break` to exit the loop
* Which monsters remain at the end? When the loop has finished, iterate over the `hoard` loop again and print only those elements that are not set to null. Tell the player that these are the remaining monsters.

* Make the program piece by piece (how small can each testable piece be?) and test each small process thoroughly before moving on to the next

<br>
<hr>

### _FOR_ LOOP CONTROL PANEL I

#### start condition (2 min)
The start condition does not have to begin at 1 or 0. It can begin anywhere.

```
var arr = [1, 2, 3, 4, 5, 6];

for (var i=4; i < arr.length; i++) {
	console.log(arr[i]);
}
```

```
=> 5, 6
```
<br>

&#x1F535; **Activity (5 min)**

```
var Wilkersons = ["Hal", "Lois", "Dewey", "Malcolm", "Reese", "Francis"];
```

* Write a _for_ loop that iterates starting from the middle of the array (Malcolm)

* Hint: write an expression that finds the length of the array and halves that number, and use that number as the start condition

<br>

#### incrementer and start condition (2 min)

We can loop in reverse by making the incrementer a decrementer (count backwards). Instead of `i++` we write `i--`.

This loop counts down from 100 to 1. The start number is `100` and the repeating expression is `i--`.

```
for (var i=100; i > 0; i--) {
	console.log(i);
}
```
<br>

&#x1F535; **Activity (8 min)**

FIGURE IT OUT 

* With the following array

```
var trip = ["hole", "a", "down", "falling", "am", "I"];
```

* Write a _for_ loop that prints each word starting from the end of the array and going backwards. (Iterating in reverse)

<br>

#### incrementer (2 min)

We can make a loop that will skip every second index in an array. We can set the incrementing number to increase by 2 instead of 1:

```
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i=0; i < nums.length; i += 2) {
	console.log(nums[i]);
}
```

<br>

&#x1F535; **Activity (7 min)**

* Make an array of ten of your favorite things

* Make a variable `k` and set it to `2`

* Write a _for_ loop that will skip every `k` index in the array (and print the thing at `k`)

* Run the loop

* Change the value of `k` to `3` and run the loop

* Change the value of `k` to `9` and run the loop

* Change the value of `k` to a number larger than the length of the array, and run the loop

<br>
<hr>

### EXTRA ACTIVITY: CONDITIONALS INSIDE WHILE LOOPS
You can put conditionals inside a while loop:

&#x1F535; **Code along (6 min)**

```
var count = 50;

while (count > 0) {

	if (count === 25) {
		console.log('Whooaao, we\'re halfway there . . .');
	}

	console.log(count);
	count--;
}

console.log('WhoaaAAo, livin\' on a prayer!');
```

&#x1F535; **Activity (15 min)**

Breakout rooms in pairs

In `student_labs` make an `index.html` and an `app.js` and link them together. Open the program in Chrome.

FIGURE IT OUT

* Write a program that runs while a variable `hitpoints` is greater than 0 AND less than or equal to 10
* `hitpoints` should start at 5
* Give your user a choice with a prompt: they can either 
	* 'pinch' their own earlobe, causing 1 hitpoint of damage
	* do a qi gong 'warmup', gaining 1 hitpoint
	* if they put something else then they die :/
* At the end of the program
	* if hitpoints are 0, send a message saying "Congrats! You have destroyed your earlobe"
	* if hitpoints are 10 or over, send a message saying "Whoa! You can't get any warmer"

<br>
<hr>

MORE ON DRY:

Here's another example of an inefficient process - printing each item from an array:

```
var items = ["chair", "table", "map", "magnifying glass", "rupees"];

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);
```

Not only is this inefficient, but an array can be any length, and we should write code that is flexible and generalized. Loops allow us to perform repetitive tasks with unknown length.

<hr>
License
<hr>