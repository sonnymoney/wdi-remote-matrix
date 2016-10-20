![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: jQuery II<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Topics: jQuery click events and 'this' <br>
<hr>

#jQuery

### Lesson Objectives

_After this lesson, students will be able to:_

- Add an event listener and handle to DOM elements using jQuery
- Use Jquery to perform common DOM tasks
- Distinguish between a native JS object and a jQuery object

<br>
<hr>

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