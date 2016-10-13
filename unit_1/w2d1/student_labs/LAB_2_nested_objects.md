# LAB

### Nested data: More objects and arrays

* Make a file `arrays_of_objects.js` in your student_labs directory for today
* Do your work in the `arrays_of_objects.js` file


The following data structure, `solarSystem`, is a common data structure: an **array** of **objects**. You will see this particular data structure more and more as you venture into JSON and servers. This one is an **array** of **objects** which also contain an **array** inside. Given the following data structure of arrays and objects:

```
var solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

```

Write Javascript that does the following:

```
EXAMPLE:
- Print the boolean for Mercury's ringSystem

ANSWER
console.log(solarSystem[0].ringSystem)
```


1. Print the array of Jupiter's moons to the console.
2. Print the name of Neptune's moon "Nereid" to the console.
3. Add a new moon called "Endor" to Venus' moons array.
4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
6. Change Mercury's ringSystem boolean to true.
7. Change Uranus' moon "Umbriel" to "Oberon"
8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.

```
Expected result for question 8

=> { name: 'Mercury', ringSystem: true, moons: [] }
=> { name: 'Jupiter', ringSystem: true, moons: [ 'Europa', 'Ganymede', 'Io', 'Callisto' ] }
=> { name: 'Saturn', ringSystem: true, moons: [ 'Titan', 'Enceladus', 'Rhea', 'Mimas' ] }
=> { name: 'Uranus', ringSystem: true, moons: [ 'Miranda', 'Titania', 'Ariel', 'Oberon' ] }
=> { name: 'Neptune', ringSystem: true, moons: [ 'Triton', 'Nereid' ] }
```
<hr>
   
# BONDFILMS
### Look at this thing:

```
bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
```

Looks pretty gross eh?
 
Copy the bondFilms **array** of **objects** above into your js file. Use **for loops** and conditionals and methods in order to complete the below:

1. Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.
2. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
3. Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also. 

#### The final question is a real humdinger

FIGURE IT OUT x10000000

- Console log the single movie **object** that contains the actor who starred in the least number of films.

Expected result:

```
{ "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }
```

You should arrive at this result by comparing the frequency of actors.

_hint_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles. 

_another hint_ You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects? The syntax for iterating over an object is:

```
for (var key in obj) {
	// stuff, such as console.log(key)
}
```

Where `key` is a variable that instantiates for the keys in object, and `obj` is the name 
of the object you are iterating over. So, if you just wanted to console.log all the keys in the bondFilms object, you could write:

```
for (var key in bondFilms) {
	console.log(key);
}
```

Also remember, you can use a variable to access a key in an object, with bracket notation:

`obj[key]` will look for the property in the object that corresponds to whatever the 
variable `key` is. This is very different to the syntax `obj['key']` (notice the quotes) that will look for a key _named_ key, rather than a variable.

Further reading on the `for ... in` syntax here:   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

Good luck!
