![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-R2D2

<hr>
Title: OOP - Tamagotchi builder <br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page<br>
Topics: OOP and Object methods <br>
<hr>

# OOP and OBJECT METHODS

### Lesson Objectives
_After this lesson, students will be able to:_

- Write a method into a function and invoke it
- Use `this` to refer to properties of an object
- Invoke object methods with arguments
- Write an object that references another object
- Run a basic program by making an interactive Tamagotchi

<hr>

### SETUP (5 mins)

* In the `student_labs` directory for today, make a directory `tamagotchi`
* Inside the `tamagotchi` directory, add an `index.html` and an `app.js` and link them together
* Add a console.log and test that the message will appear in your Chrome console

<br>
<hr>

### OOP - Object-Oriented Programming (5 mins)

Object Oriented Programming is a design pattern where all processes are encapsulated inside objects.

From MDN (Mozilla Developer Network:

>OOP envisions software as a collection of cooperating objects rather than a collection of functions or simply a list of commands (as is the traditional view). In OOP, each object can receive messages, process data, and send messages to other objects. Each object can be viewed as an independent little machine with a distinct role or responsibility.

<br>
<hr>

11:15

## OBJECT METHODS
**MAKING AND EXECUTING A METHOD INSIDE AN OBJECT (5 mins)**

We are going to make an object and have it _do_ something. We can store functions inside objects. Let's make a Tamagotchi, just a regular object with properties:

**Code Along (7 min)**

```
var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10
}
```

Let's add a method to our Tamagotchi:

```
var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function() {
    console.log("WAAAH!!!!!!");
  }
}

```

We can invoke the method like this:

```
tamagotchi1.cry();
```

11:23

&#x1F535; **Activity (7 min)**

* Write a method `puke` into your Tamagotchi object that console.logs the Tamagotchi having a sick-up
* Invoke the `puke` method
* Write a method `yawn` into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired
* Invoke the `yawn` method

<br>
<hr>


11:30

## KEYWORD `THIS`
**REFERRING TO AND CHANGING INTRA-OBJECT PROPERTIES WITH KEYWORD `THIS` (2 min)**

Using `this`, we can have our object methods _act upon_ other properties that are intrinsic to our object.

Let's say we want our `cry` method to decrease the amount of food in the Tamagotchi's tummy. We would refer to the `foodInTummy` property with `this.foodInTummy`. To log this particular tamagotchi's name, we would write `this.name`:


&#x1F535; **Code Along (4 min)**

```
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  }
```

&#x1F535; **Watch (4 min)**

Copy and make another tamagotchi object, `tamagotchi2`

```
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  }
```

```
tamagotchi1.cry()
```

```
tamagotchi2.cry()
```

11:40

&#x1F535; **Activity (10 min)**

* Make it so that when `cry` is invoked, it decreases the object's foodInTummy value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

* Make it so that when `puke` is invoked, it decreases the object's health value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

* Make it so that when `yawn` is invoked, it decreses the object's restedness value by 1 and logs the new number to the console, and also logs the Tamagotchi's name


11:50

## OBJECTS COMMUNICATE WITH OTHER OBJECTS (10 mins)

Objects can communicate with each other. All it takes is for an object to refer to a previously defined object.

So far, we have a Tamagotchi object with properties and methods of our Tamagotchi:

```
var tamagotchi1 = {

  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  },
  puke: function() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health: ' + this.health);
  },
  yawn: function() {
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log('this.name + ' has current restedness: ' + this.restedness);
  }
}
```

Let's make another object, a `player`, that will perform actions on the Tamagotchi object. Objects can work together!

```
var player = {

  name: "Xanax",

  feedTamagotchi: function() {
    tamagotchi1.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi1.name + ' has been fed and now has ' + tamagotchi1.foodInTummy + ' in the tummy');
  }

```

We can invoke the player's `feedTamagotchi` method:

```
player.feedTamagotchi()
```

And it will act upon the previously defined tamagotchi1 object

<br>

12:00 

&#x1F535; **Activity (10 min)**

* Make a `player` object underneath your `tamagotchi` object

* Give your player a name

* Write a method `feedTamagotchi` in the player object that will increase the tamagotchi's foodInTummy by 1. Invoke the `player.feedTamagotchi()` method to see if it works

* Write a `medicateTamagotchi` method in the player object that will give the tamagotchi medicine and increase its health by 1. Invoke the `player.feedTamagotchi()` method to see if it works

* Write a `knockOutTamagotchi` method in the player object that will put the tamagotchi to sleep and increase its restedness by 1. Invoke the `player.knockOutTamagotchi()` method to see if it works.


<hr>
<br>

12:10


## USING ARGUMENTS (5 mins)

We can pass data as arguments to our object methods in the same way that we do it with regular functions. Let's specify what food we are feeding to our tamagotchi.

Player object:

```
  feedTamagotchi: function(food) {
    tamagotchi1.foodInTummy++;
    console.log('YUM!!! ' + this.name + ' has been fed ' + food + ' and now has ' + tamagotchi1.foodInTummy + ' in the tummy');
  },
```

```
player.feedTamagotchi("sprigs");
```

12:15

&#x1F535; **Activity (7 min)**

* Make it so you can specify what you are feeding to your Tamagotchi
* Make it so that you can specify what medicine you will give your Tamagotchi

* Try invoking the player methods in the console and provide arguments to them.



BREAK <12:23 - 12:33>

## setInterval (9 mins)

We are going to automate our Tamagotchi object! Let's a take a little detour:

`setInterval` is not strictly a part of OOP, but it is a useful tool to automate repeated actions in your code according to a timer.

The syntax is:

```
var timer = setInterval(callback, time);
```

Example of a setInterval that will 'run' our Tamagotchi's hunger pangs:

```
var hungerTimer = setInterval(function() {
	tamagotchi1.cry();
}, 2000);
```

12:42

&#x1F535; **Activity (11 min)**

* Write a setInterval `hungerTimer` that will make the Tamagotchi cry every 6 seconds (6000 milliseconds)
* Write a setInterval `yawnTimer` that will make the Tamagotchi yawn every 10 seconds
* Write a setInterval `sickTimer` that will make the Tamagotchi puke every 25 seconds

* To stop the timers from running you will need to comment them out and refresh the page.

* You can _try_ to interact with the tamagotchi by typing the player methods into the console.

<hr>
<br>

12:54

<hr>
<br>

## THIRD OBJECT (scope, setInterval, clearInterval)

**Game object (5 min)**

We have used setInterval to 'run' our Tamagotchi, but our setIntervals are not encapsulated in objects as therefore our program is not entirely object-oriented.

1:00

&#x1F535; **Activity in groups (20 min)**

Write an object called `game` that will 'run' our Tamagotchi using `setInterval`. 

* Make a `game` object below your player object.
* Inside the `game` object write a method called `start` that when invoked, will start all of the timers for the Tamagotchi. You will need to comment out our previously existing timers and put the three separate setIntervals inside the `start` method.
* When the Tamagotchi is running, try writing methods from the `player` object into the console to stop the Tamagotchi's levels from getting down to 0!

FIGURE IT OUT

* Along with `setInterval`, there is a function `clearInterval` that will clear the interval of a given variable that has a `setInterval` running.

* Write a `stop` function within the game object that will stop the timers from running. Hint: scope is an issue with this one, so you might want to define your interval variables with null value before your methods so they can be passed into any method.

<br>
<hr>

12:55

**Review**

<br>
<hr>

Example with a `stop` function that uses clearInterval to stop the timers:

```
var game = {
  hunger: null,
  sleep: null,
  sick: null,

  start: function() {
    this.hunger = setInterval(function() {
      tamagotchi1.cry();
    }, 6000);

    this.sleep = setInterval(function() {
      tamagotchi1.yawn();
    }, 10000);

    this.sick = setInterval(function() {
      tamagotchi1.puke();
    }, 25000);

  },

  stop: function() {
    console.log('attempting to stop');
    clearInterval(this.hunger);
    clearInterval(this.sleep);
    clearInterval(this.sick);
  }

}
```

<br>

&#x1F535; **Activity in groups (20 min)**

We want it so that our player can just click buttons on the page rather than type in the commands to feed the Tamagotchi, etc.

* Write three buttons into your index.html: 'feed', 'rest', 'medicate'.
* When the buttons are clicked, they should invoke the respective player object methods to give the Tamagotchi what it needs.


<br>
<hr>
License
<hr>


