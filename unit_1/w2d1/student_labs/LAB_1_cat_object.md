## LAB - the cat

### Objects, Loops, and Functions

Make a file called `cat.js` in the `student_labs` directory for today.

#### 1 
* Define an object called `cat` that contains the following properties:
	* name
	* breed
	* age (a number)

* console.log the cat's age
* console.log the cat's breed

#### 2

* Add a property `favoriteThings` to your `cat` object. You can do this without writing it into the original object definition. _Hint:_ `cat.favoriteThings = `
	* The value of `favoriteThings` should be an array with three of the cat's favorite things
	* console.log `cat.favoriteThings` to check if it has been added

* console.log the last item in the `favoriteThings` array


#### 3

* Add a property `owner` to your `cat` object. You can do this without writing it into the original definition.
	* The value of `owner` should be another object
	* The object should have the owner's name and occupation
	* Console.log(cat.owner) to see if it was added

* console.log the owner's occupation


#### 4 - TRICKY PROBLEM . . . 

* Write a _for_ loop that iterates over the `favoriteThings` array and prints each item in turn to the console.


#### 5 - TRICKIER PROBLEM . . . 

* Write a function `occupationChange` that takes a parameter called `obj`: The function is expecting an object as input.

* When the function is invoked, supply the `cat` object as an argument. _Hint:_ you can just write the variable name `cat` as the argument when you invoke the function

* The function should change the cat's owner's occupation to "crazy cat lady". Remember, inside the function, the object will be called `obj`, and not `cat`. The function does need to `return` anything, it just needs to alter the `obj` that was passed to it.

* After you have invoked the function, console.log `cat` to see if the function changed the occupation

#### 6

Oh no! Your cat has stepped into a cloning device and is going to get cloned ten times . . . 

* Make an _empty_ **array** called `manyCats`
* Write a _for loop_ that will run 10 times
* Inside the loop, push the `cat` object into the `manyCats` array
* You should end up with an **ARRAY OF OBJECTS**. That is, an array with 10 identical cat objects.

* console.log `manyCats` after the loop has run to confirm that you have an array of ten identical cats, each with the same favorite things and everything.

#### 7

* console.log the third cat's first favorite thing









