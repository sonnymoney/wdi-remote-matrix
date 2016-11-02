![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Arrays<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
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
- Use expressions with the square brackets to access elements

<hr>

&#x1F535; **Setup (5 min)**

Up until now we have just been writing into the Chrome console. Now, we will want to keep our code, so let's make some files.

* Navigate to `unit_1/w1d4/student_examples`

* Inside the `student_examples` directory. Make the lesson files:

* `mkdir arrays`

* `cd arrays` 

* `touch index.html app.js`

* open the project in atom with `atom .` (atom space dot) in Terminal

<br>

&#x1F535; **Setup (5 min)**

* Inside `index.html`, type `html` then hit TAB to make the boiletplate code.

* Link the markup and the script together. Between the `<head>` tags, type `script` then hit TAB.

* Write the string "app.js" in the `src` attribute to link your js file to the html file.

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

* Load the file in Chrome. In Atom, right click (ctrl + click) the html file name and select 'Copy Full Path`. Paste the link into Chrome.

<br>

&#x1F535; **Setup (3 min)**

* `console.log();`
	- Send messages to the console. Let's use it for debugging purposes. In app.js:

```
console.log('app.js');
```

We should see "app.js" appear in our Chrome console.

We can also use other console actions: `console.clear()`, `console.warn()`, `console.error()`

<hr>
<br>

12:20

## WHAT IS AN ARRAY? (5 mins)

- An array is a list. All list items go between square brackets: 

```
var list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

var squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

- Arrays contain `elements` separated by commas `,`

- `Elements` can be any primitive datatype
	- Usually all elements in an array are of the same datatype

- Declare an empty array

	- `var arr = [];`

<br>

12:25

&#x1F535; **Activity (5 min)**

* Make an empty array call `arr`
* Make another array `faveFoods` that contains a list of your top three favorite foods
* Console.log the array of your favorite foods

<br>
<hr>

12:28

### ACCESSING ELEMENTS (6 mins)

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

12:34

&#x1F535; **Ask (1 min)**

Length gives us the number 4, but is there an element in the `items` array with index position 4?

<br>

&#x1F535; **Activity (5 mins)**

* Work in your js file. Remember to **save** the file after you have worked inside of it. 
* See the output in Chrome Console by refreshing the page.
* With the following array:

```
var ghostbusters1984 = ["Venkman", "Spengler", "Stantz", 
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
```

* Console.log the first element in the array
* Console.log the third element in the array
* Console.log the length of the array

<br>

&#x1F535; **Activity (5 mins)**

RESEARCH

* Find an array method that will tell you `indexOf` the string "Melnitz"
* Find an array method that will `reverse` the order of elements inside the array

<br>
<hr>

12:40

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

12:38

&#x1F535; **Activity (1 min)**

* With the following array:

```
var numbers = [21, 18, 5, 3, 2, 1, 1];
```

* Change the third element of the array to `null`, and console.log the array to confirm. (The third element is the number 5)


&#x1F535; **Activity (4 min)**

FIGURE IT OUT

* Change the first element of the array to equal **itself** times ten using the compound operator `*=`. 

* Why wouldn't `nums[0 * 10]` work for this purpose?


<br>
<hr>

12:43

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

12:50

&#x1F535; **Activity in pairs (10 mins)**

 - Make an array that contains two of your favorite tv shows or movies
 - `.push()` another TV show or movie into the array
 - research the javascript array method `.sort()`
 - save a `.sort()`ed version of the array to another variable, and console.log the new array
 - `.push()` another TV show or movie into the sorted array
 - research the javascript array method `.reverse()`
 - save a `.reverse()`ed version of the array to another variable, and console log the reversed result 
 - research the array method `.pop()` and use it on your array. What does it do?
 - research the array methods `.shift()` and `.unshift()`. How do they differ from `.push()` and `.pop()`?
 - research the array methods `.slice()` and `.splice()`. What do they do? How do they differ?

<br>
<hr>

1:00

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

1:12

&#x1F535; **Activity (4 mins)**

With the following array:

```
var runDMC = ["Run", "DMC, "Jam Master Jay"];
```
 
* Console.log the last element in the array using the length of the array inside the square brackets

&#x1F535; **Activity (5 mins)**

FIGURE IT OUT

* When querying the array, put an expression between your square brackets that accesses a _random_ element of the array

<br>
<hr>

End of lesson

<hr>

### MULTI-DIMENSIONAL ARRAYS (5 mins)

Array elements can be non-primitives. Elements can be other arrays.

```
var pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
```

The `pairs` array has `2` elements. Use `pairs.length` to verify.

- The element at 0 is `["Snoopy", "Linus"]`
- The element at 1 is `["Peppermint Patty", "Woodstock"]`

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Peppermint Patty` from the pairs array:

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

&#x1F535; **Activity (9 mins)**

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

