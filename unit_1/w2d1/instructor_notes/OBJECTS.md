![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-R2D2

<hr>
Title: Objects<br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page<br>
Topics: Javascript intro: objects <br>
<hr>

## Lesson Objectives

_After this lesson, students will be able to:_

- Explain the difference between arrays and objects
- Make an empty object
- Store key-value pairs inside an object
- Access values by key-name
- Change the value of an existing key
- Access values within nested objects
- Access values in an array of objects
- Access values of an array within an object


<hr>

## SETUP (9 mins)

* In the `student_labs` folder for today in `unit_01/w02d01/student_labs`:
* Make a file `objects.js`
* Add a console.log for testing purposes
* Run the file in Terminal with `node objects.js` -- you should see the console.log appear

<br>
<hr>

# OBJECTS



### Arrays and Objects

**Demonstrate (5 mins)**

* We can use arrays to store multiple pieces of data, a collection

```
var vehicle = ["blue", 4000, 1989];
```

* An object is also a collection, but we can use objects to store data with greater specificity
* With the array above, we don't know what the values mean

<br>

&#x1F535; **Code Along (4 min)**

Key-value pair syntax:

```
var car = { color: "blue", hp: 4000, year: 1989 }
```

* Unlike arrays, objects use _named keys_ rather than ordered indexes. Each piece of data is _bound_ to its key, rather than arbitrarily assigned an index

* In Javascript, an object is a way to group many pairs of keys and values together

We can access the values stored in key using dot notation:

```
console.log(car.color)
```

Or bracket-quote notation

```
console.log(car['color']);
```

<br>

&#x1F535; **Ask (5 min)**

* What differences do you see between the `vehicle` array and the `car` object?

**DIFFERENCES BETWEEN ARRAYS AND OBJECTS**

* Arrays are declared using the square brackets ` var arr = [];`
* Objects are declared using the curly braces `var obj = {}`

Objects contain _key-value pairs_. The are are the **properties** of the object

A **key** is like an **index** in an array, but it has

* a name
* it is unique

A key is really a string but we can omit the quotes.



A **value** is what a key _refers to_, and can be any datatype.

<br>

11:23

### BUILDING AN OBJECT

&#x1F535; **Code Along and Ask (5 min)**

Build an object again in detail, demonstrating that:

* We use a colon to separate the key and the value
* We do not put semicolons after our values.
* We separate our key-value pairs with a comma

```
var person = {}
```

Ask the class for properties to add to the person object.

Ask the class how to access the properties.

<br>


&#x1F535; **Activity (5 min)**

* Create an empty object and then abandon it
* Create an object called `dog` that has the following properties:
	* name (a string, give your dog a name)
	* age (a number, give your dog an age)
	* Remember the correct use of curly braces, colons, and commas! No semicolons!
* Console.log the `dog` object to check if its correct
	* `console.log(dog)`
* Console.log just the dog's name
* Console.log just the dog's age

&#x1F535; **Activity (5 min)**

* Create an object called `celebrity` that has the following properties:
	* name (a string, give the celebrity a name)
	* age (a number, give the celebrity an age)
	* annualIncome
	* isADisaster (a boolean)
	* isCool (a boolean)
* Console.log the `celebrity` object
	* `console.log(celebrity);`
* Console.log just the name of the `celebrity`
* Console.log just the annualIncome of the `person`
* Console.log whether or not the `celebrity` is cool

<br>
<hr>

11:38

#### ADDING PROPERTIES TO OBJECTS

You can easily add more properties to a previously declared object:

&#x1F535; **Code Along (10 min)**

Building a house:

```
var house = {
	doors: 9
}

console.log(house)
=> Object { doors: 9 }
```

Add properties to the `house` object by simply adding a key using dot notation and the value using an equals `=`:

```
house.windows = 30
```

```
console.log(house);

=> Object { doors: 9, windows: 30 }
```

Add another property `squareFootage`:

```
house.squareFootage = 300
```


<br>
11:48

&#x1F535; **Activity (7 min)**

* Create an _empty_ object called `macros`
* Add to the object a key `protein` with a value 'tempeh'
* Add to the object a key `carbohydrates` with a value 'spuds'
* Add to the object a key `fats` with a value 'olive oil'
* Console.log the `macros` object to check if all the macros are there
	
<br>
<hr>

11:55

#### CHANGING PROPERTIES OF OBJECTS

&#x1F535; **Activity (3 min)**

Changing the value of an existing key has the same syntax as creating a new key-value pair:

```
var bicycle = {
	isATricycle: false
}
```

```
bicycle.isATricycle = true
```

<br>
11:58

&#x1F535; **Activity (7 min)**

* Create an object called `guitar` with the following properties:
	* a key `strings` with value 6
	* a key `isAcoustic` with value true (boolean)  
* _Change_ the value of `strings` to 100
	* Console.log the value of `strings`
* _Change_ the value of `isAcoustic` to false
	* Console.log the value of `isAcoustic`
* Without writing into your object directly, add a key `belongsTo` with the value 'Dimebag Darrell'
	* Console.log the value of `belongsTo`
* _Change_ the value of `belongsTo` to 'Mr. Rogers'
* Console.log the entire `guitar` object
	
<br>
<hr>

BREAK 12:05 - 12:15

<br>
<hr>

## OBJECT-CEPTION

####Objects can contain arrays as values

&#x1F535; **Code Along (5 min)**

```
var adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}
```

Access all values in the player.belongings array:

```
console.log(adventurer.belongings)
```

Access a specific item in the belongings array:

```
console.log(adventurer.belongings[0])
```
<br>
12:20

&#x1F535; **Activity (6 min)**

* Access the belongings array and print "Tums" to the console

&#x1F535; **Extra Activity**

* Use `.push()` to add a "Vogue Magazine" to the belongings array

&#x1F535; **Super Extra Activity**

* Write a _for_ loop that prints each element in the belongings array to the console

<br>
12:27
#### Objects can contain other objects as values

&#x1F535; **Code Along (6 min)**

```
var adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: { 
	             name: "Velma",
	             type: "Bat"
	           }
} 
```

Access the companion object:

```
console.log(adventurer.companion)
```

Access the companion's name:

```
console.log(adventurer.companion.name)
```

Access the companion's type:

```
console.log(adventurer.companion.type)
```

<br>
12:31

&#x1F535; **Activity (3 min)**

* Print the companion's name to the console

&#x1F535; **Activity (3 min)**

* Change the companion's name "Velma" to "Susan"
* Console.log to check that the name was changed

&#x1F535; **Extra Activity**

FIGURE IT OUT

* Add another object to the `adventurer` object called `companion2`. 
* `companion2` should have a name and a type "Insect"


<br>
<hr>
12:42

&#x1F535; **Activity in pairs (15 min)**

* Spend five minutes on each section of _Object Errata_ at the very bottom of the markdown.
* Discuss each section together and perform a quick test on each topic


<br>
<hr>

1:05

# ADVENTURE

&#x1F535; **Activity (25 min)**

**MAKE AN ADVENTURE WITH OBJECTS IN PAIRS**

In `student_notes` in your repo, make a `battle.js` file.

Inside `battle.js`:

Make an object called `player` with the properties

* name, your name (a string)
* hitpoints, set to the number 10

* Console.log player to see if it's all good

Make another object called `warlock` with the properties

* name, "Zagor"
* hitpoints, set to the number 10

* Console.log warlock to see if it's all good

Underneath your objects:

Make a function called `playerAttack` that has no parameters. In the `playerAttack` function, 
reduce the Warlock's hitpoints by 1, and console.log a message saying that the Warlock has been hit, and display the Warlock's new hitpoints score.

* Invoke the function to check if it worked

Make a function called `warlockAttack` that has no parameters. In the `warlockAttack` function,
reduce the player's hitpoints by 1, and console.log a message saying that the Player has been hit, and display the Player's new hitpoints score.

* Invoke the function to check if it worked

EXTRA: FIGURE IT OUT

Write a WHILE loop with a conditional inside that will run either one function or the other one randomly (50/50 chance). The loop should run until one of the players has 0 hitpoints. (The loop will only run while the player's hitpoints are greater than zero _and_ the warlock's hitpoints are greater than zero).

_hint_: _example_: `var chance = Math.random()` will assign a number _between_ 0 and 1 to the variable `chance`.

<br>
<hr>

## OBJECT ERRATA

&#x1F534; **KEYS ARE UNIQUE (5 mins)**


An object can not have more than one key with the same name. If it does, the value will default to the last key with the same name, and the prior properties will be excluded on creation.

```
var borough = {
	name: "Brooklyn",
	name: "The Bronx"
}
```

```
console.log(borough);

=> Object { name: "The Bronx" }
```

Therefore, we can only use keys when they are unique to s specific object.

TEST IT OUT!

&#x1F534; **ACCESSING AND NAMING KEYS USING BRACKETS AND QUOTES (5 mins)**

You can create and access any key with square brackets and quotes.

```
var goblin = { badGuy: true }
```

```
console.log(goblin['badGuy']);
=> true
```

With square brackets and quotes, you can make key names with spaces and special characters, because the key is _coerced_ into a string. _But_ you then have to access the value from here on out with square brackets and quotes.

```
var strangeObj = {}

strangeObj['a key with spaces'] = 999;

console.log(strangeObj)
=> Object { 'a key with spaces': 999 }
```

You would need also to access that key with the square brackets and quotes:

```
console.log(strangeObj['a key with spaces'])

=> 999
```

TEST IT OUT!


&#x1F534; **KEYS THAT ARE NUMBERS (5 mins)**

If a key is just a number, that number will be coerced into a string, which is fine.

```
var obj = {
	1: "one",
}
```

```
console.log(obj);
=> Object { '1': 'one' }
```

But, you cannot access that key with dot notation. There is another way to access key-values using square brackets and quotes `obj['1']`

TEST IT OUT!

<br>

&#x1F535; **Activity (4 min)**

* Create an _empty_ object called `testObject`
* Give `testObject` a key called 'this is a test' with the value "test"
	* Console.log the value of the key 'this is a test'
* Give test object a key called `2` with the value "I'm just messing around with objects"
	* Console.log the value of the key `2`
 

<br>
<hr>
Licence
<hr>




