![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: OOP - Constructor Functions<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Topics: Constructor Functions<br>
Prerequisites: Building a Tamagotchi from OOP - Object Methods
<hr>

# OOP - CONSTRUCTOR FUNCTIONS

### Lesson Objectives
_After this lesson, students will be able to:_

- Write a constructor function
- Invoke a constructor function with the `new` keyword and explain what it returns
- Use `this` within a constructor function
- Pass arguments to a constructor function
- Explain why we might choose to use a constructor function rather than just an object


<hr>


### WHAT IS A CONSTRUCTOR FUNCTION? (5 mins)

When we made our Tamagotchi, that Tamagotchi's `name` and `creatureType` were _hardcoded_ into the object. It was the one and only Tamagotchi that we could use. What if we wanted to make many different Tamagotchis each with its own name and creatureType, and each behaving independently? 

We could write out an entirely new tamagotchi object. **OR** we could make a _template_ with which to automate the construction of our Tamagotchi objects. We would need only to write the constructor once, and with it, we could construct an indefinite amount of Tamagotchi objects without having to write them out one by one.


### WRITE A CONSTRUCTOR FUNCTION (5 mins)

A constructor function is a _function_, not an object. We do not write key-value pairs inside our constructor like we do with objects, instead, we just assign values to variables. We refer to the properties that will exist within that generated object by using the keyword `this`:

3:10

&#x1F535; **Watch (9 min)**

```
var Tamagotchi = function() {

  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
      this.foodInTummy--;
      console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
      console.log('current food in tummy: ' + this.foodInTummy);
  }
}
```

Our constructor function generates a new object using the `new` keyword when the function is invoked. 

```
var constructedObject1 = new Tamagotchi();
var constructedObject2 = new Tamagotchi();
```

```
console.log(constructedObject1);
console.log(constructedObject2);
```

Invoke methods on the constructed objects:

```
constructedObject1.cry();
constructedObject2.cry();
```

3:19 

&#x1F535; **Activity (9 min)**

* Write a constructor function for a Tamagotchi
* Using `this.propertyName = value`, add the `foodInTummy`, `restedness`, and `health` and set the values to 10.
* Add in a method called `cry`. The `cry` function should reduce `foodInTummy` by 1, console.log the new value of `foodInTummy`, and console.log a crying sound.
* Make two `new` tamagotchis
* Invoke each tamagotchi's `cry` method

<br>
<hr>

## ADD ARGUMENTS TO THE CONSTRUCTOR FUNCTION (7 mins)

We can give our constructed objects unique values by providing arguments to our constructor function. In the same way that regular functions can take input (parameters), so can our constructor functions, and they can put those input values into the constructed object.

Here, our constructor takes two parameters: a `name` and a `creatureType`. We will assign those values to variables within the constructor, and then use one in the `cry` method:

3:35

&#x1F535; **Watch (4 min)**

```
var Tamagotchi = function(name, creatureType) {

  this.name = name;
  this.creatureType = creatureType;

  this.age = 0;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
      this.foodInTummy--;
      console.log(this.name + " is crying!!! WAAAH!!!!!!");
      console.log('current food in tummy: ' + this.foodInTummy);
  }
}
```

3:39

Let's make some unique Tamagotchis by providing the arguments to the constructor function:

```
var tamagotchi1 = new Tamagotchi("Jacc", "Critter");
var tamagotchi2 = new Tamagotchi("Neff", "Snoop");

console.log(tamagotchi1);
console.log(tamagotchi2);
```

Invoke the `cry` function in our new tamagotchis:

```
tamagotchi1.cry();
tamagotchi2.cry();

```

3:48

&#x1F535; **Activity in pairs (30 min)**

* Add parameters to your constructor function: `name` and `creatureType`
* Make it so that the constructor function will add the values of `name` and `creatureType` to the constructed object. variables _hint:_ `this.propertyName = parameterValue` within the function.  
* Make it so that the `cry` method will console.log the Tamagotchi's name

* Create `new` Tamagotchis each with different names and creatureTypes
* Invoke each Tamagotchi's `cry` method

FIGURE IT OUT

* Add in the methods that alter the Tamagotchi's `restedness` and `health` levels.
* Make new Tamagotchis and test that the methods work and that they console.log the Tamagotchi's name as well as the altered values.

SUPER FIGURE IT OUT

* Make it so that when you invoke `game.start()` that the game only starts for a particular Tamagotchi

_Hint:_ You can pass a tamagotchi object (tamagotchi1 or tamagotchi2, etc) as an argument to the start function. `game.start(tamagotchi1)`. Your start function will need to take that object as a parameter: `start: function(tamagotchiObject)`

* Invoke game.start multiple times, each time with a different Tamagotchi


SUPER FIGURE IT OUT

* Make it so that when you invoke the action your player can take (feedTamagotchi, etc), that the player only feeds one particular Tamagotchi.

_Hint:_ The same as above: You can pass a tamagotchi object (tamagotchi1 or tamagotchi2, etc) as an argument to the feedTamagotchi function. `player.feedTamagotchi(tamagotchi1)`. Your feedTamagotchi function will need to take that object as a parameter: `feedTamagotchi: function(tamagotchiObject)`

<br>
<hr>

4:18

&#x1F535; **Review (12 min)**

<br>
<hr>
License
<hr>






