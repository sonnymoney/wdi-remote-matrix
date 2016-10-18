![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

---
Title: Pick-a-path<br>
Type: Lab<br>
Duration: As long as it takes<br>
Creator: Thom Page<br>
Topics: Conditionals in the browser <br>


---
# PICK-A-PATH


Remember those pick-a-path books where you could 'choose your own adventure'? Make your own pick-a-path adventure!

### DUNGEON ADVENTURE

- You are going to make a console game! Your adventurer is going to explore a dungeon!


![](http://cdn.gamesocool.com/c/gs/cover/4f/adventure-time-finn-up/adventure-time-finn-up.jpg?v=1415081881)

## ADVENTURE

#### Let's begin our adventure!

<br>

&#x1F535; **Setup: create files**

Inside the `student_labs` directory, make an `adventure` directory and go into it. Make the project files.

* `mkdir adventure`

* `cd adventure` 

* `touch index.html app.js`

<br>

&#x1F535; **Setup: link files together**

* Link the markup and the script together in `index.html`
* A shorthand is to type `script` then [TAB] which will autocomplete the script tag. Add the javascript filename to the `src` attribute in quotes.

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

<br>

&#x1F535; **Setup: testing**

* In `app.js` send a test message to the console to check that the files are linked:

```
console.log('app.js');
```

We should see "app.js" appear in our Chrome console.

We can also use other console actions: `console.clear()`, `console.warn()`, `console.error()`


* Load the file in Chrome. In atom, right click (ctrl + click) the html file name and select 'Copy Full Path`. Paste the link into the Chrome url bar.


<br>
<hr>

&#x1F535; **ADD STRINGS TO THE ADVENTURE**

* Send your user a header message about the adventure on which the user is about to embark.
* Send a prompt asking for your user's name
* Send a message welcoming the user with the input from the prompt

* `prompt();`
	
	- Ask Chrome to prompt the user with a text box.
	- We can capture the value of the text by saving it to a variable

Example:
	
```
var input = prompt('Please input some data:');

console.log(input);
```



Example:

```
console.log('app.js');

console.log('===========================');
console.log('LET'S GO ON AN ADVENTURE!!!');
console.log('===========================');

// get the user's name, a string, from a prompt
var name = prompt('What is your name?');

console.log(`Welcome ${name}!`);

```

<hr>
<br>


&#x1F535; **ADD NUMBERS TO THE ADVENTURE**

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

&#x1F535; **ADD AN ARRAY TO THE ADVENTURE**

* Make an array with the user's belongings: a sword, a potion, and Tums.
* Send a message to let the user what belongings they have.


**BEFORE YOU CONTINUE, YOU SHOULD ALREADY HAVE**

- Set up your user's data:
	- the user's name from a prompt
	- the user's hitpoints
	- the user's damage
	- an array of the user's belongings

- Welcomed your user with a prompt and ask for the user's name.

- Sent your user a message with their name in the console, and listed the user's hitpoints, damage and belongings.

<br>
<hr>

&#x1F535; **ADD CONDITIONALS TO THE ADVENTURE!**

TIPS: 

* Focus on acheiving just one thing at a time. 

* Test your code thoroughly.

* The mark of a good developer is the humility to test every single piece before moving on. Make sure it works! There is no rush!

**Using prompts and conditionals to direct your program flow:**

- Send your adventurer a console.log telling them that they are entering the dungeon. 

- Give your user a choice. Take the left passage or the right passage?

- If they take the left passage, they will see two doors.

- If they take the right passage, they will arrive at an underground lake. 

<br>
<hr>

&#x1F535; **NESTED CONDITIONALS**

You can add conditionals inside previously established conditionals:

```
if (condition1) {
	console.log('condition1 is true');
} else {
	console.log('condition1 is false');
	if (condition2) {
		console.log('Shrimp and white wine!!');
	} 
}
```

In the above conditional there are two top-level branches dependent on the truth-value of `condition1`.
 
* If it is true, only the first branch will run and will console.log('condition1 is true'). 
* If it is false, the second branch will run and will console.log('condition2 is true'). 

* If the second branch runs there is _another_ conditional inside of it that will run if another condition, `condition2` is true, and it will console.log('Shrimp and white wine!!') -- otherwise this nested conditional will not run. 

Using nested conditionals, we can take our adventurer on a journey that reflects the choices that they make (note that the adventurer's choices will not be able to be undone just yet!). 

<br>

**LEFT PASSAGE BRANCH**

Inside the conditional branch for the left passage, you can add more conditionals that are available _only if_ your user took the left passage.

- They can choose to open either one of these doors.

- If your user opens door1, they will receive another potion! Add another potion to the array of belongings and update the user. (The Adventure will be over for now)

- If your user opens door2, - If your user opened door2, they meet a bat called 'Velma' who will travel with them. Give Velma an array of things to say! Randomly choose one of those things and log it the console. (The Adventure will be over for now)

<br>


**RIGHT PASSAGE BRANCH**  

- They can choose to dive into the lake or continue down the passage.

Now we will have a conditional inside a conditional inside a conditional

<br>

**DIVE INTO THE LAKE BRANCH**

- If your user dives into the lake, they lose an item from their belongings! Remove an item from the array and update the user. You user will then become a Lake Dweller forever, unfortunately. (The Adventure will be over for now)

<br>

**CONTINUE DOWN THE PASSAGE BRANCH**


- If your user continues down the passage, they arrive at a Crystal Plinth. On the plinth are three crystals. The user can put two of these crystals together and will receive either a bonus or punishment depending on which crystals the user puts together. Send a prompt and ask which of the two crystals the user chooses to combine!
	- `crystal1` and `crystal2`: they get 100 extra hitpoints!
	- `crystal2` and `crystal3`: their name is changed to 'Slimy Tim'
	- `crystal1` and `crystal3`: they receive a special power called 'Energy Blast'. How would you represent this in your data?

_Hint:_ Use boolean operators in the conditional, such as `if (crystal1 && crystal2) {}`
	
(The Adventure will be over for now)

**MORE**
- What happens from here is up to you!














	

	

	

