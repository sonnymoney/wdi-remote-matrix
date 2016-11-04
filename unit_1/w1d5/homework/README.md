![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-MATRIX

---
Title: Weekend 1 Homework<br>
Type: Homework<br>
Duration: "8:00 - 12:00"<br>
Creator: Various including WDI-Persephone and Thom Page<br>
Adapted by: Kristyn Bryan<br>
Course: WDIR-Matrix<br>
Competencies: Javascript arrays, objects, and functions<br>
Prerequisites: Basic Javascript

---

## Javascript 
<details><summary>Javascript Practice</summary>
### Challenge!
This weekend you will embark on a series of coding challenges in Javascript. Some of these challenges are just for basic commands, and some are deeper problem-solving challenges. 

To solve these challenges, you may need to do research on your own to find useful methods. Remember to **pseudo-code** if you get stuck. Finding the first step to solving a problem is the hardest part. Also remember there is usually more than one way of coding a solution, there is often no one correct answer. Just do your best to get the results!

Here is a link to some useful videos on JS fundamentals by Matt Short, another GA instructor: <br>
https://www.youtube.com/playlist?list=PLw1xVKFbouem3dTQpZi645Z3NMVpMeBud


<details><summary>Setup</summary>
 - In your homework folder for today (w1d05), create a `solutions.js` file. 
 - Write your solutions for these challenges in `solutions.js`. 

	<details><summary>Test your Javascript</summary>
	Test your answers in the Chrome Console. 

	Note: If you're having trouble with this, you can run your answers in [repl.it](https://repl.it/languages/javascript) which is very much like JSBin. DO NOT do all of your work in repl.it, just test it there. Your work should be in your `solutions.js` file.
	</details>

</details>

<details><summary>Arrays</summary>
#### Grab Bag

- Create a new array called `grabBag` that contains the following data:
  - `"shoe"`
  - `true`
  - `99`
  - `null`

### Cake Walk
- Given the following array `teachers`, console.log the name `Kristyn`
```
var teachers = ["Matt", "Thom", "Kristyn", "Karolin"];
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"1st commit - those were easy array question!  ".
<hr>
  
### Find the Median
- Find the median number in the following `nums` array, then console.log that number. 
-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"2nd commit - finished Find the Median array question ".
<hr>
     
### What's in Your Closet?

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

```javascript
var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.
3. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
4. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"3rd commit - finished looking through Kristyn's closet array".
<hr>

5. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
6. In the same way, access one item from Thom's pants array.
7. Access one item from Thom's accessories array.
8. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"4th commit - finished looking through Thom's closet array".
<hr>

</details> 


<details><summary>Loops</summary>  
### Easy A 
1. Write a *while* loop that will log in the console `Feed me, I'm hungry!` 10 times.

2. Write a *for* loop that will log in the console `printout number X of 10` where X is the current number. 

Expected Result:
```
printout number 1 of 10
printout number 2 of 10
printout number 3 of 10
printout number 4 of 10
printout number 5 of 10
printout number 6 of 10
printout number 7 of 10
printout number 8 of 10
printout number 9 of 10
printout number 10 of 10
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"5th commit - finished with the easy loop questions".
<hr>

### The Return of Grab Bag
Using array `grabBag` that you made earlier,

- Using bracket notation, log the second item in the array to your console.
- Write a **for loop** that iterates through your array and logs each element.
- Now, modify your code so that your loop logs the `typeof` each element.
- Let's make it crowded! Add the following piece of data to the **end** of your `grabBag` array: `[3,6,9]`

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"6th commit - finished with Grab Bag".
<hr>

### Malcolm in the Middle
- Write a *for* loop that can iterate over the Wilkersons array below, starting from the middle of the array. Remember in the **for loop** 'control panel', you can specify where the loop should start. 

```
for (var start_position; until; increment) {
	// tell your loop what to do
}  
```

So, 'Malcom' is in the middle of the `Wilkersons` array. In the loop, console.log 'Malcolm' and everything after 'Malcolm'.

```
var Wilkersons = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal"];

Expected result
=> Malcolm
=> Reese
=> Hal
```

* Write a *for* loop for the following `plusJamie` array. Note that this array has an _odd_ number of elements ('Jamie' is added to the end of the array). 'Malcom' is still in the middle. Within the loop, console.log everything from the middle (Malcolm), and onwards:

```
var plusJamie = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal", "Jamie"];

Expected result
=> Malcolm
=> Reese
=> Hal
=> Jamie
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"7th commit - finished with Malcolm in the Middle".
<hr>
</details>

<details><summary>Functions 1</summary>

### Get Fun(c)ky

1. Write a function called `greeting` that takes in a name and logs in the console `hello NAME`.

```
var greeting = function(name) {
	// your code
}

greeting(//your code);
```

2. Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string.

Expected Result:
```javascript
var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"8th commit - finished first set of functions".
<hr>

### Palindrome
3. Write a function `palindrome` that accepts a single argument, a string. The function should return true if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

```
console.log(palindrome("Radar"));
 
 => true
```

```
console.log(palindrome("Borscht"));

=> false
```
<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"9th commit - finished palindrome function".
<hr>

### Maximum Functionality
4. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

```
console.log(maxOfThree(6, 9, 1));

=> 9
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"10th commit - finished maxOfThree function".
<hr>

</details>

<details><summary>Functions 2</summary>

### Calculator

1. Write a function called `calc`.

This function should take three parameters, `num1`, `num2`, and `operation`. 

If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

```
console.log(calc(4, 3, "sub"));

=> 1
```

```
console.log(calc(4, 3, "exp"));

=> 64
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"11th commit - made a calculator!".
<hr>

### Vowels
1. Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

```
console.log(isAVowel("a"));

=> true
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"12th commit - found the vowels".
<hr>


### Sum it up
1. Write a function `sumArray` that sums the numbers in an array of numbers. 

```
console.log(sumArray([1,2,3,4]));

=> 10
```
<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"13th commit - added all the numbers in an array".
<hr>

### Word Reverse
1. Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line")
# => "line the on back Hans Put"
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"14th commit - reversed all the words in the string".
<hr>

</details>

</details>
<details><summary>Hungry for More Javascript?</summary>
### Arrays
Use the arrays from Kristyn's and Thom's closets above:

## Alien Attire
Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remember the variable we saved Kristyn's shoe to earlier on? Use that to add Kristyn's lost shoe to Thom's accessories array.

## Dress Us Up
Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"I was hungry for more arrays!".
<hr>

## Loops
### Dirty Laundry
Continue looking at the closet arrays:
- Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

### Inventory
Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"I was hungry for more loops!".
<hr>

## Functions

### Pythagoras
Write a function `pythagoras` that that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
  
_hint:_ discover the Pythagorean Theorem on a website called google.com  
_hint:_ checkout the Math methods in javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


```
console.log(pythagoras(8, 6));

=> 10
```

### Die Hard
Write a function `longest` that accepts a single argument, an array of strings. The method
should return the longest word in the array. In case of a tie, the method should
return the word that appears first in the array.

```javascript
longest(["die", "hard", "with", "a", "vengeance"]) # => "vengeance"
longest(["bruce", "willis", "was", "in", "other", "movies"]) # => "willis"
```
<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"I was hungry for more functions!".
<hr>
</details>

## HTML & CSS 
<details><summary>Read these for inspiration</summary>
- This article is taken from a Wix blog. There's a reason why Wix is so popular - they are visually appealing! Read this to [learn some styling tips](http://www.wix.com/blog/2014/03/5-web-design-tips-for-a-professional-site/) before you continue with your site.
- You'll hear some of these thrown around and others you will never hear in our class, but it's nice to be aware of [Buzz Words](http://www.wix.com/blog/2014/02/15-web-design-buzz-words/)!
</details>

<details><summary>HTML and CSS Practice</summary>
- Fix up your resume site from w1d2.
1. Start by copying your files from w1d2 and save them in your homework folder for this weekend. 
	<details><summary>_Need a reminder on how to copy your files?_</summary> 
	- from the `wdi-remote-matrix` folder you'll want to run the command `cp` on the folder that you want to move (remember that we named it `resume_page`) and then specify the file where you want to place a copy (tonight's homework folder). Because this is a folder with files, we'll need to use the flag `-r` to get all of the files.
	- You command will look like this `cp -r unit_1/w1d2/homework/resume_page unit_1/w1d5/homework/resume_page`
	</details>

<details><summary>Add more details to your Project page</summary>
_Note:_ If you completed the `Hungry for More` section on Tuesday, you may have already done this part.

1. On your Project page, insert an image of yourself, or an image of one of your projects.
2. Make the image round (note: you may have to edit your picture to make it perfectly square first). 
3. Insert a button on both pages (your home page and your project page) that links to **opening an email** to your email address.
<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1 - HTML & CSS- I added more info to my resume page".
<hr>
</details>

<details><summary>Style your navigation bar</summary>
A navigation bar can be tricky at first, but there are many good ways to style it. 

Note! For this to work, your nav bar has to be setup like this:
<details><summary>This is how you should setup your nav bar in your HTML file</summary>
```
<nav>
	<ul>
		<li><a href=#>You first link</a></li>
		<li><a href=#>You second link</a></li>
		<li><a href=#>You third link, etc.</a></li>

	</ul>
</nav>
```
</details>

1. Let's add the following style to your nav bar:
``` 
nav ul { 
	margin: 0; 
	padding: 5px; /* Set margin and padding for cross browser consistency. */ 
	list-style-type: none; /* Needed to eliminate list item marker */ 
	text-align: center; /* Centers navigation bar */ 
	background-color: #000; /* Set as desired */ 
} 
```
- save your work and take a look at your nav bar.

2. Adjust the list items.
```
nav ul li { 
display: inline; /* Needed to create horizontal effect */ 
} 
```
- save your work and take a look at your nav bar.

3. Let's adjust the anchor tags:
```
nav ul li a { 
	text-decoration: none; /* The setting of "none" allows the link to not be underlined. This is up to user preference. */ 
	padding: .2em 1em; /* Gives the link space inside it's individual block. */ 
	color: #fff; /* Set as desired */ 
	background-color: #000; /* Set as desired */ 
} 
```
- save your work and take a look at your nav bar.

4. Make it fancy when we hover on a link
```
nav ul li a:hover { 
	color: #000; 
	background-color: #fff; /* Both of these values create the "Rollover effect, Set as desired */ 
} 
```

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2 - HTML & CSS - I styled my nav bar".
<hr>
</details>

<details><summary>Get inspired</summary>
- Look at the sample resume pages below. Get inspired! Pick one and try to mimic it.
- Go to [Google Fonts](https://fonts.google.com/) and try to incorporate a new font into your website.

	<details><summary>St. Pier</summary>
	![St. Pier](http://i.imgur.com/ERc8ZSZ.png)
	</details>

	<details><summary>Macek</summary>
	![Macek](http://i.imgur.com/GTGtjbW.png)
	</details>

	<details><summary>Sarah</summary>
	![Sarah](http://i.imgur.com/VharQ7F.png)
	</details>

<hr>
&#x1F534; ** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3 - HTML & CSS - I changed my site inspired by the FILL IN THE NAME resume page".
<hr>
</details>
</details>

## Video (Approx. 60 mins)
<details><summary>Watch this video</summary>
1. Watch this video for an introduction to algorithms. You don't need to memorize it or take notes, this is just a nice introduction to algorithms. 

https://www.youtube.com/watch?v=xdElovY8A2w
</details> 


## When You're Done

<details><summary>Submission</summary>
 - Inside this folder (w01d05/homework), you should now have a file called `solutions.js`. In addition, you should have inside your `homework` folder the folder `resume_page` with the files `index.html`, `style.css`, and `projects.html`.
 - You should have been adding and committing along the way, but please type `git status` one last time to make sure that everything is commited. If it's not, please commit. 
 - Push your work to your github repo `git push origin master`
 - Follow the instructions for submitting homework, found in [the wiki](https://github.com/ga-students/wdi-remote-matrix/wiki/Homework-Submission)
</details>




