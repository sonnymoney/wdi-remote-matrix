![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Tic Tac Toe<br>
Type: Lab<br>
Duration: 1+ hr<br>
Creator: Thom Page<br>
Topics: Using loops to create multiple elements, Setting a click listener within the loop, Setting a click handler that will target the clicked element with `this`.<br>
<hr>

### SETUP
Regular old setup!

* In `student_labs` for today `unit_01/w02d04/student_labs`:

* Make a directory `tic_tac_toe`

* Inside `tic_tac_toe`, Make your three usual front-end files: `app.js`, `index.html` and a `style.css` and link them up

<br>
<hr>

### Put a button on it

* In your `index.html`, write in a button. Give it an id of `clear-board`. The button will eventually 'clear' the game, so for now put the text `clear board` between the `<button>` tags.

* Give your button a click listener in Javascript.

* Give the listener a handler so that when the button is clicked, a message 'clicked' appears in the console. This is just to check that the click works. Always test your click events!


### Make the game board

* In your `index.html`, make a div with id `board` on your page, and set its height and width to 800px. Make it so the div has a background color or border so that you can see it.

* Inside your javascript, grab the board div with `document.querySelector('#container')` and save it to a variable so that you can reference it later.

* Below your board div variable, write a `for loop` that iterates 9 times, and each time (ie. you only have to write it once within the loop), it will: 

	* generate a `div` using `document.createElement('div')`, and remember to save it to a variable too!
 
	* Inside the loop, give your div a class `square` using `divVariable.classList.add('square')` 

	* append the div to the board div, eg: `boardVariable.appendChild(divVariable)` (these variable names are just examples -- your variables could be named differently).

* Adjust your css so that you can see the squares when they are appended:
	* Adjust your css so that the square will have a height and width of something like 250px.
	* Give your div a border of 1px solid black, and perhaps a background-color.

* Make it so the divs align in a 9x9 grid. Hint: if the squares are set to `display: inline-block`, and they are the right size, they will adjust position according to the size of the board div.

**Make sure your 9x9 grid is generated, visible, and ready to go!** 

* We want to make it so that when any of these squares is clicked, that we can have something happen to the individual square that was clicked.

* Back inside your for loop, give the square a click listener that references a _named function_

example: `element.addEventListener('click', someFunction)`

someFunction is the _name_ of the function that we haven't yet written. It will be defined elsewhere, rather than just writing `function() { ... }` into the listener after 'click'.

### Make each individual square show an X when clicked

* Define your handler function _above_ the for loop so that it will be defined before the loop runs, and make it so that when a square is clicked, an 'X' will appear inside the square that was clicked. Use the power of keyword `this` inside your handler function to apply the text.

```
this.innerText = "X"
```

**STYLE**

* In your css file:
* Change the size of the 'X' font in your square class to something bigger
* Center the 'X' font within the div. `text-align: center`
* Vertically align your 'X' within the square:
	* Set `line-height` to theight of the square div (250px)
	* Set `vertical-align: middle` 

When you add text the square, it might vertically rearrange your squares. To keep them in line, investigate setting `overflow: hidden` on your square class. Or alternatively, googe it!


### Make the squares show an X or an O

FIGURE IT OUT

By toggling a global variable to either `true` or `false`, make it so that when a user clicks on a square, it will alternate between displaying 'X' and 'O'

FIGURE IT OUT

Finally, make it so that a square will not change its 'X' or 'O' if it has already been clicked.


### Clear the board

FIGURE IT OUT

Make it so that when you click the clear board button, the game resets

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)



