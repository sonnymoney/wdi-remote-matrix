![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-Matrix

<hr>
Title: Click Events and This II - Using Loops<br>
Type: Lesson<br>
Duration: 1.5hrs<br>
Creator: Thom Page<br>
Topics: Javascript intro: DOM events, This, generating elements using loops and This <br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- generate DOM elements in a _for_ loop
- set a single click listener on each element generated inside the _for_ loop
- write a single click handler outside the loop
- use the keyword `this` to target an element within the handler

<hr>

## SETUP (10 mins)

* In your `student_labs` directory for today `unit_01/w02d04/student_labs` :
* Make a _directory_ called `events_and_loops`
* Inside the `events_and_loops` directory, make an `index.html` and an `app.js` and a `style.css`
* Link your `index.html` to the `app.js` and the `style.css`.
* Write a console.log in your `app.js` for testing
* Load the `index.html` in your browser and make sure the console.log appears in your Chrome console


3:10

### DYNAMICALLY GENERATING CONTENT

Let's say we want to have **ONE THOUSAND** square divs on our page. We _could_ write out or copy/paste 1000 divs, **or** we could use a _for_ loop and do it once. Keepin' it DRY.

We want to have 1000 square divs because we are going to build a sketch-pad.

&#x1F535; **Activity (9 mins)**

FIGURE IT OUT 

The goal is to generate 1000 divs in a _for_ loop and append them to the document.body

* Write a loop that will generate 1000 divs and add them to the page
* Give each div a class of `square` within the loop

* In your css, set the size of each square to 20px x 20px, and display to inline-block. Give them a background-color of ivory. Temporarily, you could give them a border of 1px solid grey to see them better.


&#x1F535; **Class Walkthrough and Code Along(15 min)**

```
  for (var i=0; i < 1000; i++) {
    var div = document.createElement('div');
    div.classList.add('square');
    document.body.appendChild(div);
  }
```


3:25

&#x1F535; **Code Along(15 min)**
Now, we can add an eventListener to each div within the loop. For our sketchpad, we don't want a 'click'. Instead, we can use a `mouseover`.

* set an `.addEventListener` one time within the loop. The first argument for the listener should be `mouseover` instead of `click`. For the second argument, use a named handler function called `changeColor`
* Write the `changeColor` function above and outside the loop.
* The handler function will add a class `pink` that will make the _target_ element pink. To locate the target element, use the keyword `this`.

Even though we set the _same_ click listener and handler on each div, we can target each individual div with the keyword `this`. 

```
window.onload = function() {

  var changeColor = function() {
    console.log('clicked');
    this.classList.add('pink')
  }

  for (var i=0; i < 1000; i++) {
    var div = document.createElement('div');
    div.classList.add('square');
    document.body.appendChild(div);
    div.addEventListener('mouseover', changeColor);
  }
}
```

3:40 
&#x1F535; **Activity (20 mins)**

* Make it so your sketchpad works: when you mouseover a square its color will change to pink
* Using an input field, make it so that user can decide how many divs there are!

SUPER FIGURE IT OUT

* Make it so that when the user mouses over a square, a _random_ color will appear, not just pink. There are many different ways to solve this problem. The important thing is that you try to tackle it rather than solve it.

SUPER FIGURE IT OUT

* Make it so that the square divs are contained inside a container div of fixed height and width. Depending on how many divs the user decides to make, the divs should alter their _size_ to fit the container!


&#x1F535; **Show (5 mins)**

Show your sketchpad!

&#x1F535; **Review (5 mins)**

What are the steps involved in setting a single click listener and handler on multiple elements?

1. Make a loop that runs x amount of times
2. Generate an element and append it to the page
3. Give the element some css if necessary
4. Set an event listener on the element
5. Write an event handler for the event listener (either anonymous or named)
6. Use the keyword `this` to refer to the target element within the event handler

<br>

<hr>

**Extended LAB - making Tic Tac Toe**






