![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Arrays<br>
Type: Lesson<br>
Duration: 1 hr<br>
Creator: Thom Page<br>
Topics: Javascript intro: arrays <br>
<hr>

# ARRAYS

### Lesson Objectives
_After this lesson, students will be able to:_

- Declare an empty array
- Access and change array elements
- Add and remove elements from an array
- Use at least 6 array methods, and research more methods on their own
- Include arrays inside other arrays (multi-dimensional arrays)
- Access and change multi-dimensional array elements
- Add and remove multi-dimensional array elements
- Use an array in a program

<hr>


## WHAT IS AN ARRAY? (5 mins)

- An array is a list. All list items go between square brackets: 

```
var list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

var squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

- Arrays contain `elements` separated by commas `,`

- `Elements` can be any primitive datatype
	- Usually all elements in an array are of same datatype

- Declare an empty array

	- `var arr = [];`

<br>
	
&#x1F535; **Setup (5 min)**

* In your repo, in the `student_labs` directory for `unit_01/w01d04/student_labs`:
* create a file `arrays.js` and `console.log('hi!');`
* run the file with `node arrays.js`. See the output in your Terminal. Make sure you are in the `student_labs` directory to run the file.
* Write your answers into this file.

&#x1F535; **Activity (5 min)**

* Make an empty array call `arr`
* Make another array `faveFoods` that contains a list of your top three favorite foods
* Console.log the array of your favorite foods

<br>
<hr>

### ACCESSING ELEMENTS (3 mins)

Each element in the array has a numbered `index`. The first element has an index of 0.

* Access elements by putting the `index number` in square brackets.

Access the first element in an array:

```
var items = ["chair", "table", "candle", "map"];

console.log(items[0]);
=> "chair"
```

Access the second element in an array:

```
var items = ["chair", "table", "candle", "map"];

console.log(items[1]);
=> "table";
```
<br>

**.length method**

We can use the `.length` method to find out the number of elements in an array

```
console.log(items.length);
=> 4
```

<br>


&#x1F535; **Ask (1 min)**

Length gives us the number 4, but is there an element in the `items` array with index position 4?

<br>

&#x1F535; **Activity (5 mins)**

* Work in your `arrays.js` file, and run the code with `node arrays.js`. See the output in your Terminal.
* With the following array:

```
var ghostbusters1984 = ["Venkman", "Spengler", "Stantz", 
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
```

* Console.log the first element in the array
* Console.log the third element in the array

<br>


### CHANGING ELEMENTS (5 mins)

* To change an element, first access the element, and then assign a new value:

```
var veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
```

```
veggies[1] = "spinach";
=> "spinach"
```

```
console.log(veggies);
=> ["red pepper", "spinach", "pumpkin", "cauliflower"]
```

<br>

&#x1F535; **Activity (9 min)**

* With the following array:

```
var numbers = [21, 18, 5, 3, 2, 1, 1];
```

* Change the first element of the array to `null`, and console.log the array to confirm

FIGURE IT OUT

* Change the first element of the array to equal **itself** times ten (you could use a compound operator `*=` ). Remember, the number could theoretically be anything, not just 21. 

* Why wouldn't `nums[0 * 10]` work for this purpose?


<br>
<hr>

### ARRAY METHODS: ADDING AND REMOVING ELEMENTS

###### ADDING AND REMOVING ELEMENTS

**Adding by index (2 mins)**

We can easily add an element to an array by just specifying an index number and assigning a value.

```
var nums = [1, 2, 3];

nums[10] = 9;
nums

=> [1, 2, 3, undefined × 7, 9] 
```

**Adding with .push() 5 mins**

However, we don't always know the length of the array. We can conveniently add data to end of the array using the `.push()` method.

	
- `.push()` adds an element to the end of the array.

```
var Beatles = ["George", "John", "Ringo"];
```

```
Beatles.push("Paul");
```

```
Beatles;
=> ["George", "John", "Ringo", "Paul"]

```	
<br>

&#x1F535; **Activity (10 mins)**

 - Make an array of two of favorite tv shows or movies
 - `.push()` another TV show or movie into the array
  - research the javascript array method `.sort()`
 - save a `.sort()`ed version of the array to another variable, and console.log the new array
 - `.push()` another TV show or movie into the sorted array
 - research the javascript array method `.reverse()`
 - save a `.reverse()`ed version of the array to another variable, and console log the reversed result 
 - research the array method `.pop()` and use it on your array
 - research the array methods `.shift()` and `.unshift()`. How do they differ from `.push()` and `.pop()`?
 - research the array methods `.slice()` and `.splice()`. What do they do? How do they differ?

<br>
<hr>

**Using expressions to access elements (12 mins)**

We can put an `expression` between the square brackets to access array elements.

```
var list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[2 * 2];
=> "magnifying glass"

```

In an array with an **even** number of elements, we could find the element that comes right after the middle:

```
var list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[list.length / 2];
=> "map"

```

Cannot access the last element with position -1, like in Ruby. 

This will not work: `arr[-1]`

To access the last array element:

```
var items = ["chair", "table", "candle", "map"];

items[items.length - 1];
=> "map";
```

<br>
We can also use variables in our square brackets, as long as the variable references a whole number:

```
var sheep = ['Merino', 'Romney', 'Faulkand'];
var num = 1 + 1;

console.log(arr[num]);
=> "Faulkland"
```

<br>

&#x1F535; **Activity (9 mins)**

With the following array:

```
var runDMC = ["Run", "DMC, "Jam Master Jay"];
```
 
* Console.log the last element in the array using the length of the array inside the square brackets


FIGURE IT OUT

* When querying the array, put an expression between your square brackets that accesses a _random_ element of the array

<br>
<hr>

# ADVENTURE

&#x1F535; **Activity (8 min)**

**ADD AN ARRAY TO THE ADVENTURE**

* Make a variable `belongings` and set it to an array. The array should contain your user's adventuring items! Give your user a potion, a sword, and some Tums.

* Send a console log telling your user what belongings they have

Example

```
// declare belongings: an array of strings
var belongings = [ "potion", "sword", "Tums" ];

console.log(`You have: ${belongings}`);
```

<br>
&#x1F535; **Activity (6 min)**

Make an array of treasures that the user could potentially find! Randomly select one and inform the user that they could postentially find that particular piece of treasure.

<br>
<hr>

### MULTI-DIMENSIONAL ARRAYS (3 mins)

Array elements can be non-primitives. Elements can be other arrays.

```
var pairs = [["Thom", "Matt"], ["Marc, "Christine"]];
```

The `pairs` array has `2` elements. Use `pairs.length` to verify.

- The element at 0 is `["Thom", "Matt"]`
- The element at 1 is `["Marc", "Christine"]`

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Marc` from the pairs array:

```
pairs[1][0]
```

- multi-dimensional arrays are useful for nested information and grid layout
- 9x9 grid:

```
var grid = [
             [0, 1, 2], 
             [3, 4, 5],
             [6, 7, 8]
            ];
```

Changing elements in a multi-dimensional array is the same process as with a regular array

```
var confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg"]];

confectionary[1][0] = "musketeer";

confectionary;
=> [["mounds", "almond joy"], ["musketeer", "easter egg"]]
```

<br>

&#x1F535; **Activity (5 mins)**

* With the following multi-dimensional array

```
var whereIsWaldo = [["Timmy", "Frank"], "Eggbert", 
                    ["Lucinda", "Jacc", "Neff", "Snoop"], 
                    ["Petunia", "Baked Goods", "Waldo"]];
```

* What would you write to access "Waldo"?
* What would you write to access "Jacc"?
* Change "Baked Goods" to "No One"
* Research the `.splice()` method and remove "Eggbert"

<br>
<hr>
License
<hr>

