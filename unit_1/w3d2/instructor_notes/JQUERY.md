![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: jQuery<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
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

* In your `student_examples` directory for today: `unit_1/w3d2/student_examples`
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

12:14

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

12:20

### USE JQUERY AS A SHORTHAND FOR NATIVE JS COMMANDS

&#x1F535; **Demo (10 min)**

Compare Vanilla js to jQuery commands

* window.onload
* Grab an element by id
* Generate an element
* Add text to an element
* Append it to the page

12:30

&#x1F535; **Activity (7 min)**

REFER TO THE JQUERY COMMANDS SECTION IN THE MARKDOWN FOR SYNTAX

* Add the jQuery library to your project 
* Test that it is installed
* Write in the jQuery window.onload
* Write a button into your index.html and use jQuery to grab it (log the button to the console)

&#x1F535; **Activity (3 min)**
* Create a div with jQuery, and give the div some text
* Append the div to the body of the page

12:40

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

12:48

&#x1F535; **Activity in pairs (30 min)**

RESEARCH AND IMPLEMENT jQUERY COMMANDS

Official jQuery docs: `http://api.jquery.com/`
Also, refer to the jQuery commands section at the bottom of the markdown

* Make and link a CSS file to your `index.html`

In `index.html`

* Comment out the button and div from earlier
* Write in two divs, an outer and an inner div. Only the inner div will have an id:

```
<div>
	<div id="inner-div"></div>
</div>
```

In `app.js`

* Write jQuery to grab the inner div (by id) from the page
* Use jQuery to grab the _parent_ of the inner div from the page

In your CSS file:

* Write a CSS class `big-box` that will make its elements 200px by 200px and the color blue
* Write CSS class `small-box` that will make make its elements 100px x 100px and the color red

In `app.js`

* Use jQuery to give the outer div the `big-box` class
* Use jQuery to give the inner div the `small-box` class

* Use jQuery to remove the inner div from the page 

* Use jQuery to create another div and append it to the `body` of the page 
* Use jQuery to give this new div the class `small-box`
* Use jQuery to add CSS properties to this new div: give it a border-radius of 50%

* Use jQuery to append the new div to the outer div
* Use jQuery to _clone_ the new div and append it to the outer div. Do this three times (you should see four red circles extending from the blue box)

* Use jQuery to grab all the _children_ of the outer div
* Use jQuery to set the css properties of these children to `display: inline-block`

The four red circles should be sitting (uncomfortably) within the blue box

* Using jQuery `.eq()`, grab the first child of the children of the outer div
* Using jQuery, give the first child an id of `first`


<br>
<hr>

1:18

&#x1F535; **Review jQuery Activity**


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

- set class on element: `jQueryElement.addClass('className')`

- get the parent of an element: `jQueryElement.parent()`

- get child elements: `jQueryElement.children()`

- set an event listener: `jQueryElement.on('click', function() {} )`

- click listener: `jQueryElement.click( function() {} )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( jQueryElement )`

- prepend elements: `jQueryElement.prepend( jQueryElement )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('someClass')`

- remove a class from an element: `jQueryElement.removeClass('someClass');`

- set a css property on an element: `jQueryElement.css('property', 'value')`

- clone an element: `jQueryElement.clone()`

- append an element with the order reversed: `jQueryElement.appendTo( jQueryElement )`

- get a specific jQuery element from a list: `jQueryCollection.eq( indexNum )`



<br>
<hr>
License
<hr>

