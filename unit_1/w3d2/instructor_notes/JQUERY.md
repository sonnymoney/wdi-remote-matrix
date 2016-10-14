![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: jQuery vs Vanilla<br>
Type: Lesson<br>
Duration: Morning<br>
Creator: Thom Page<br>
Topics: Intro to jQuery <br>
<hr>

#jQuery

### Lesson Objectives

_After this lesson, students will be able to:_

- Provide jQuery assets to their webpages, link to a jQuery CDN
- Use Jquery to perform common DOM tasks
- Distinguish between a native JS object and a jQuery object

<br>
<hr>

&#x1F535; **Setup (9 min)**

* In your `student_labs` directory for today: `unit_01/w03d02/student_labs`
* Create a _directory_ `jquery`
* Inside the directory, make an `index.html` and an `app.js`
* Link them together and verify that a console.log will appear in your Chrome console

<br>
<hr>

### WHAT IS JQUERY (5 min)

jQuery:

1. Is a _library_ of code that you include in the same way you include your own js scripts
2. Provides a _shorthand_ method of manipulating DOM elements
3. Returns a jQuery object instead of a native JS one

<hr>
<br>

11:14

### ADD JQUERY TO A PROJECT (6 min)

**CDN** 

`https://code.jquery.com/`

* Select the minified version of the latest jQuery
* Copy the url
* Include the url as the `src` in a `script` tag
* Place it _before_ your application script

**LIBRARIES**

A library is a collection of reusable methods/functions that serve a particular purpose. We can load a library into our js the same way we load our application script. The browser will read and load the js from the library.

**Check if jquery is installed**

Type `$` in the Chrome console. 

![](https://i.imgur.com/L6uuz1A.png)

11:20

### USE JQUERY AS A SHORTHAND FOR NATIVE JS COMMANDS

&#x1F535; **Demo (10 min)**

Compare Vanilla js to jQuery commands

* window.onload
* Grab an element by id
* Generate an element
* Add text to an element
* Append it to the page

11:30

&#x1F535; **Activity (10 min)**

REFER TO THE JQUERY COMMANDS SECTION IN THE MARKDOWN FOR SYNTAX

* Add the jQuery library to your project 
* Test that it is installed
* Write in the jQuery window.onload
* Write a button into your index.html and use jQuery to grab it (log the button to the console)
* Create a div with jQuery, and give the div some text
* Append the div to the body of the page

11:40

<br>
<hr>


### DATATYPES (8 mins)

jQuery objects are not native js objects. You cannot mix your datatypes: native js commands cannot be performed on jQuery objects and vice versa.

Adding a class to a div:

```
var div = $('<div>');

// this will not work because div is jquery object, but classList.add is native js:

div.classList.add('class');

// this will work:
div.addClass('class')
```

To make it explicit that your variables refer to jQuery objects, add a `$` in front of the variable:

```
var $div = $('<div>');
```

<br>
<hr>

11:48

### EVENT LISTENERS, `$(this)` (6 min)

**`elem.on('click', ... );`**

* get value from an input box

**`$(this)`**

jQuery has its own version of `this`. You can not use jQuery commands on the native js `this`: instead, you have to use `$(this)`

* change the text on a button

<br>
11:54

&#x1F535; **Activity (10 min)**

REFER TO THE JQUERY COMMANDS SECTION IN THE MARKDOWN FOR SYNTAX

* In `index.html` write in an input box and give it an id
* In `index.html` write in a button and give it an id 
* Use jQuery to grab the input box
* Use jQuery to grab the button
* Use jQuery to add an event listener to the button
* When the button is clicked:
	* Console.log the `input.val()`
	* Change the text of the button

<br>
<hr>

<break 12:04 - 12:14>

&#x1F535; **Activity (1 hr)**

**To Do List lab**

<br>
<hr>

&#x1F535; **Review lab (15 mins)**

<br>
<hr>



## JQUERY COMMANDS

- window.onload 

```
$(function() {
	// code inside jQuery window onload
}
```

- this: `$(this)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things!

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element `jQueryElement.addClass('className')`

- click listener: `jQueryElement.click( function )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( //stuff )`

- prepend elements: `jQueryElement.prepend( // stuff )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('.someClass')`

- set a css property on an element: `jQueryElement.css('property', 'value')`





