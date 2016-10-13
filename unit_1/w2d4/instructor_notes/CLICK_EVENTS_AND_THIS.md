![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-R2D2

<hr>
Title: Browser Events and This<br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page<br>
Topics: DOM Events, Clicks, This<br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- use the `window.onload` event to load DOM elements
- click on DOM elements and run procedures with `.addEventListener`
- explain the difference between a listener and a handler
- distinguish between anonymous vs named function references
- use the keyword `this` to reference the target element

<hr>

### SETUP (10 mins)

* In the `student_labs` directory for today, `unit_01/w02d04/student_labs` :
* Make a _directory_ called `click_events`
* Inside the `click_events` directory, make two files: `index.html` and `app.js`
* Link them together with a script tag in your HTML file: `<script type="text/javascript" src="app.js"></script>`
* Write a console.log into `app.js`
* Load the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together

<br>
<hr>

11:10

# BROWSER EVENTS

&#x1F535; **Demo (5 min)**

`unit_01/w02d04/instructor_examples/events_example`

Demonstrate various events in the browser

Every kind of interactivity in the browser is an event: clicks, mouseovers, key presses, scrolling, resizing, loading the page, and more.

When you interact with the browser it checks to see if there is a _listener_ for that interaction.

If there is a _listener_ present, the browser will try to run any _handlers_ for those interactions.

11:15

## window.onload (4 min)

You can set an onload event that takes place when everything in the web page has completely loaded. This includes the HTML code, images, CSS files, and Javascript files. When all of them have finished loading, `window.onload` is called, allowing you to reference everything on the web page. Otherwise, you might be inadvertently trying to reference elements that haven't yet been loaded.

<br>

11:19 

&#x1F535; **Code Along (5 min)**

```
window.onload = function() {

	alert('inside window onload');

};

alert('outside window onload');
```

Demonstrate that the alert outside of the `window.onload` runs before the alert inside the `window.onload`

11:24

&#x1F535; **Ask (5 min)**

* Why do we want everything loaded on our html page before we load the javascript?

<br>

11:29



### Setting up a click event with .addEventListener

How can we set up a _click_ event? 

We need:

1. An element to set it on
2. A _listener_ that listens for the event: _when_ and _where_ should the event take place
3. A _handler_ that runs the procedure we want to have happen when the event occurs


&#x1F535; **Code Along (12 min)**

Make a button in our html:

```
<button id="a-new-button">Click for addEventListener procedure<button>
```

Grab the button in the JS (DOM element):

```
var button = document.querySelector('#a-new-button');
```

Set an event listener:

```
button.addEventListener('click');
```

The event listener takes a string as an argument. There are just a few strings that it will recognize as valid events, and 'click' is one of them.

Add a _function_ that runs what we want to have happen. This function is what _handles_ the event and is called an _event handler_:

```
button.addEventListener('click', function() { console.log('button was clicked!!'); });
```

Notice that we have supplied a function as an argument. The jargon for using a function as an argument to another function is `callback`. We will talk about callbacks tomorrow. What we need to know right now is:

![](https://i.imgur.com/g6Ju1YD.png)

11:41


&#x1F535; **Activity (10 min)**

* Add another button to your `index.html` that with the text `This is my button!` between the tags, and has an id of `my-button`
	* `<button id="my-button">This is my button!</button>`

* In your `app.js`, grab the button by its id from the DOM and save it to a variable. Remember you can use `document.querySelector` or `document.getElementById` to grab DOM elements by id.

* Make it so that when you click the button, a console.log will appear in your browser's javascript console that says `My click event works!!!`

* Whenever you make a click event, always test it with a console.log to make sure that it works.


&#x1F535; **Extra Activity**

* Make it so that when the button is clicked, a message will appear on the page instead of just inside the console. _example:_

Create a paragraph:

```
var p = document.createElement('p');
```

Add text to the paragraph:

```
p.innerText = "HERE IS SOME TEXT";
```

Append the paragraph to the page:

```
document.body.appendChild(p);
```

&#x1F535; **Extra Activity**

FIGURE IT OUT

* Make it so that when the button is clicked, an image will appear on the page.

&#x1F535; **Extra Activity**

* Experiment with setting more than one listener on the same element. How would you go about doing that? 

<br>

11:51

&#x1F535; **Demo and Ask (5 min)**

* Look at solutions to the activity

* What is the difference between an event _listener_ and an event _handler_ ?


<break 11:56 - 12:06>


### CAPTURING INPUT

&#x1F535; **Walkthrough / Code Along (10 min)**

Let's set up a click event that actually does something! We are going to capture some input from our user.

index.html
Make an input field and a button

```
<input type="text" placegolder="enter your name" id="input-box"/>
<button id="input-button">SUBMIT</button>
```

app.js

```
window.onload = function() {
  var input = document.querySelector('#input-box');
  console.log(input);

  var button = document.querySelector('#input-button');
  console.log(button);
  
  button.addEventListener('click', function() {
  	  console.log('Hi! Your name is: ' + input.value);
  });

}
```

12:16

&#x1F535; **Activity (10 min)**

* Make an input box and a button. The input should ask for the user's favorite TV show
* When you click the button, make it so that a message appears on the page: "Hi! Your favorite show is: ~show name from input~"

&#x1F535; **Extra Activity**

* Instead of a TV show name, ask the user to input the url for an image that they like
* When the user clicks the submit button, add an `img` to the page and set the `src` attribute to the input value. Get the image to show on the page.

<br>
<hr>

12:26

&#x1F535; **Demo and Ask (5 min)**

* Look at solutions to the activity

* Again: What is the difference between an event _listener_ and an event _handler_ ?

<br>
<hr>

12:31

### Using a named, referenced function as the click handler for addEventListener (2 min)

The _handler_  that we used for our click was _anonymous_. It was a function that had no name. We just told the listener to run an _anonymous_ function. We can give our function a name and thereby reuse that function with other event listeners.

&#x1F535; **Code Along (6 min)**

```

var doSomeStuff = function() {
	console.log('I am invoked inside an addEventListener');
}

button.addEventListener('click', doSomeStuff);
```

With a named function, we can use the same handler for more than one DOM element. Note that we do not invoke the function with parentheses. We do not want to invoke the function right away, we merely want to _reference_ it to be invoked when the listener runs it.

* The function should be defined before it is used in the event listener
* When the function is invoked inside the event listener **leave out the parentheses**. We do not want to invoke the function right away! We merely want to reference that function in the listener.

12:45

&#x1F535; **Activity (10 min)**

* Separate an anonymous handler function from one of your `.addEventListener`'s, and make it a named function instead.  
* Make it so that the named handler will run when the button is clicked. (Remember to make sure the function is _referenced_ and not _invoked_ when you set it on the listener).
* Make it so that the click will append a message to the page.

&#x1F535; **Extra Activity**

* Add yet another button, and make it so that when this extra button is clicked, it will run the exact same handler as your previous button.

&#x1F535; **Extra Activity**

* Make it so that when you click either of these buttons, an image will toggle on and off the page. Click once = message appears. Click again = message disappears. Click again = message reappears, etc. _Hint:_, you can use a global variable boolean and toggle it upon click.

12:55

<br>
<hr>

&#x1F535; **Ask (5 min)**

* What is the difference between a named vs anonymous function?
* When would you want to use a named function over an anonymous one? 

<br>
<hr>

1:00
 
## THIS 

What if we want our click handler to alter the element that was clicked? Eg. We click on a button and we want the text of the button itself to change. There is a shorthand way to refer to the event element: the keyword `this`.

&#x1F535; **Code Along (6 min)**

```

var doSomeStuff = function() {
	this.innerText = "THE EARTH IS AN OBLATE SPHEROID";
}

button.addEventListener('click', doSomeStuff);
```

A reference to the element is secrely passed into the listener, and then into the handler. We can reference the exact event element (the target of the user's interaction) with the keyword `this`.


1:01

&#x1F535; **Activity (10 min)**

* Add code to each of your button click handlers that will change the `innerText` of the button that was clicked. Use the keyword `this` to accomplish this task.

&#x1F535; **Extra Activity**

* Create and link a css file to your `index.html`
* Make it so that when you click a button that has a named event handler, that button will gain a class called `red` that will turn the button red. Use the keyword `this` to refer to the clicked element.

&#x1F535; **Extra Activity**

* If you have two buttons running the same click handler, do they _both_ turn red? Verify that only the button that was clicked turned red. 


1:11

&#x1F535; **Activity in pairs (15 min)**

You are going to make three red square divs each with their own _listener_, but all with the same _handler_. When you click on a square, that square will turn blue (and only that square) will turn blue.

Directions:

* In your `index.html`, write in three divs with unique ids (whatever you like), and give each a class of `square`
* If you haven't already done so, link a `style.css` to your html
* In your `style.css` give your `square` class a height of 100px and a width of 100px
* Set a background-color on the `square` class to `red`
* Set display to inline-block on the `square` class

* Write an event listener for each of these squares. Each listener should run the _same_ named handler function called `changeColor`.
* Using the keyword `this` within your named event handler `changeColor`, make it so that when a square is clicked, it will turn blue.


&#x1F535; **Extra Activity**

* Remove your square divs from the `index.html`
* In your js, create 100 divs on the page using a _for_ loop!
* Within the _for_ loop, set a single click event listener on the currently-iterated-div, and have it reference the same handler as before
* Outside the loop, put your previous handler (that changes the div's color)

You should be able to click on any one of these 100 squares and it will change color

&#x1F535; **Extra Activity**

* Make it so that when you click a square, it will toggle between red and blue. Click once = turns blue. Click again = turns red. Click again = turns blue., etc.

1:28

&#x1F535; **Ask Again (5 min)**

* What is the difference between an event listener and an event handler?
* What is the difference between a named vs anonymous function?
* When would you want to use a named function over an anonymous one?
* What does the keyword `this` refer to?
* Why would you use the keyword `this`?

<br>
<hr>



### Multiple events with addEventListener

DOM Level 2 Events are compatible with modern browsers. These allow us to set more than one listener on a given element if we so desire to have more than one.

To set multiple events on the same element, you have different handlers for each event (because it doesn't make sense to set the same handler twice).

&#x1F535; **Code Along (5 min)**

```
button2.addEventListener('click', function() {
	console.log('I am invoked inside an addEventListener');
});

button2.addEventListener('click', function() {
	console.log('I come from a second click handler.');
});
```

<br>
<hr>

## A brief history of setting click events


### inline click listener

Used on really old browsers

&#x1F535; **Code Along (5 min)**

* Comment out any alerts that might pop up when you load your page (alerts are annoying!)

Setting inline properties: 

```
<button style="background-color: red">SEE THE LOG</button>
```

```
<button onlick="console.log('you clicked it')">SEE THE LOG</button>
```

### decoupled inline click listener

Now we will separate our click listener and handler from the html into our javascript file.

With this method, we can set one and only listener on an element. This was used on IE9 and earlier.

&#x1F535; **Code Along (7 min)**

```
<button id="click-me">Click for decoupled js code!</button>
```

```
var button = document.querySelector('#click-me');

button.onclick = function() {
	console.log('I was invoked in the js file!');
}
```

* The `onclick` property is the _listener_.
* The function that tells the browser what to do is called the _handler_


### More than one event with onclick?

&#x1F535; **Code Along 5 min**

You can only set a property of a DOM element _once_. If we write another `onclick` below this one, it will overwrite the first one. 

```
button.onclick = function() {
	console.log('I was invoked in the js file!');
}

button.onclick = function() {
	console.log('I am overwriting the previous onclick listener');
}
```

Use the `.onclick` property if you only intend to set one event listener on your element. What if we want to set more than one?

<hr>
<br>
BREAK 12:01 - 12:11

<br>
<hr>
License
<hr>



