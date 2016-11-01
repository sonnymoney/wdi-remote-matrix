![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Express Views<br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page<br>
Topics: <br>
<hr>

# EXPRESS - Views

### Lesson Objectives
_After this lesson, students will be able to:_

- Set up EJS and make Views
- Make an Index view that links to the Show views
- Use static files (CSS)
- Explain MVC and Resources

<hr>

# VIEWS

So far we have just been sending raw data to our page in JSON format. This technique underpins our use of front-end frameworks like Angular in Unit 3, and we will return to it.

Now, instead of just sending data, we will make proper webpages. Our webpages will be populated with our data. 

To do this, we make `Views`. Views are templates that our server _renders_ on the page.

<br>
<hr>

3:05

# MVC

Before we set up our views, we should see how they fit in to another design pattern for our apps. The acronym **MVC** describes:

* Models - our data layer
* Views - how the data is represented on a webpage
* Controllers - an intermediate step between models and views that tells our server how to mediate and distribute our data.

MVC is another form of _separation of concerns_.

<br>
<hr>

3:10

<hr>
<br>

## SETTING UP VIEWS

`npm install --save ejs`

* Make a **views** folder
* Make a folder for the resource under views. In this case, the folder will be **books**

Make a template that will render for our _index_ route:

* Make `index.ejs` inside the books folder. Write "hello world" into index.ejs. 

<br>

3:16

&#x1F535; **Activity (7 min)**

* `npm install --save ejs`. Check that ejs is listed in `package.json`
* Create a `views` directory in the root of the project
* Create a `books` directory inside the views directory 
* Inside `books`, create an `index.ejs` and write "hello world!" inside

<br>
<hr>

3:23

## ROUTING TO A VIEW

* Tell our index route to **render** the `index.ejs` template. 
* We will use `res.render` instead of `res.send`. * We will also provide a _path_ to the ejs file. The ejs module will automatically look in the views directory for templates:

```
// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs');
});
```

Check it out in the browser.

<br>
3:28

&#x1F535; **Activity (5 min)**

* Change your index route so that it will `res.render` instead of `res.send`
* Give the render a path to your `index.ejs` file
* Make sure it works by going to `/books` in your browser

<br>
<hr>

3:33

<br>
<hr>

## SENDING DATA TO THE VIEW

The view is expecting a key value pair, where the key is the name of the data, and the value is the data being sent. We can add this as the second argument to the render function:

```
// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs', { books: books });
});
```

3:35

&#x1F535; **Activity (5 min)**

* Add a second argument to the render function:
* Make this argument an object with key `books`, where the value is the `books` array.

<br>
<hr>

3:40

## EJS Templates

With ejs files, we can write normal html. We can also use **EJS tags** to write in lines of javascript. Each line must have its own set of ejs tags. There are two types of ejs tags:

`<%= %>`: displays the result of the expression on the page

`<% %>`: does not display the result. Used for structural components of javascript expressions.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    This is rendered from an EJS template!

    <h1><%= 2 + 2 %></h1>

  </body>
</html>
```

3:50

## Index View

The books object has been sent to the view, and we can perform operations on the value of that object.

Writing a full javascript expression using ejs tags, and accessing the `books` object:

```
<% for (var i=0; i < books.length; i++) { %>

  <h2><%= books[i].title %></h2>

<% } %>
```

<br>
4:10

&#x1F535; **Activity (10 min)**

* Scaffold the html boilerplate into `index.ejs`
* Within the body of the file, write a for loop with ejs tags
* Within the loop, access the title of each book using ejs tags and display it within `h2` tags

<br>
<hr>

4:20

## Show View

* Make a `show.ejs` within the books view directory.

* Set up our show route to send a single resource:

```
// SHOW Route
app.get('/books/:id', function(req, res) {
  res.render('books/show.ejs', { book: books[req.params.id] });
});
```

Populating show.ejs with the sent data:

```
<h2><%= book.title %></h2>
<p><%= book.author %><p>
```

<br>

&#x1F535; **Activity (10 min)**

* Make a `show.ejs` within the books view directory
* Set up our show route to render the chosen book:
* For the second argument in the render function, add an object with key `book` where the value is the book specified by `req.params.id`.
* In show.ejs, scaffold the html boilerplate
* Using ejs tags, display the title and author from the book object.


4:30


<br>
<hr>

### Link Index to Show

```
<% for (var i=0; i < books.length; i++) { %>

  <h2><a href="/books/<%= i %>"><%= books[i].title %></a></h2>

<% } %>
```

### Link show back to Index

```
<a href="/books">back to index</a>
```

&#x1F535; **Activity (9 min)**

* Link each book in index.ejs to its show page
* Add a link in the show page back the index

<br>
<hr>

4:44

## Static files

Tell Express to use a public folder for static front-end assets:

```
app.use(express.static('public')
```

* Make a directory called `public` in the root directory.
* Make frontend files. For now, just make a `css` file, `style.css` in the public folder.
* Link to them in the normal way from the .ejs files.

```
    <link rel="stylesheet" href="/style.css" media="screen" title="no title">
```

Write in some CSS to change the background color of the page.

&#x1F535; **Activity (9 min)**

Repeat the steps above for adding static assets

4:53

### Add images

&#x1F535; **Activity (20 min)**

* Change your dummy data. Each book object should have an `img` key where the value is a url (a string). The url should be an image of the book cover.

* Make it so the image will display in index.ejs
* Make it so the image will display in show.ejs

FIGURE IT OUT

* In index.ejs, make it so when you click the image, it will link to the show page for that book.

5:13


<br>
<hr>
Licence
<hr>

