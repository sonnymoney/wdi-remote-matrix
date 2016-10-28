![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Express Views<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
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

So far we have just been sending raw data to our page in JSON format. Now, instead of just sending data, we will make webpages to be populated with our data. 

To do this, we make `Views`. Views are templates that are _rendered_ to the page.

<br>
<hr>

# MVC

Before we set up our views, we should see how they fit in to another design pattern for our apps. The acronym **MVC** describes:

* Models - our data layer
* Views - how the data is represented on a webpage
* Controllers - an intermediate step between models and views that tells our

MVC is another form of _separation of concerns_.

<br>
<hr>

## EJS Templates

`npm install --save ejs`

* Make a **views** folder
* Make a folder for the resource under views. In this case, the folder will be **books**

* Make `index.ejs` inside the books folder.

* Tell our index route to **render** the `index.ejs` template:

```
// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs');
});
```

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

## SENDING DATA TO THE VIEW

Send data to the view. The view is expecting a key value pair, where the key is the name of the data, and the value is the data being sent:

```
// INDEX Route
app.get('/books', function(req, res) {
  res.render('books/index.ejs', { books: books });
});
```

<br>
<hr>

## Index View

Writing a full javascript expression using ejs tags, and accessing the `books` object:

```
<% for (var i=0; i < books.length; i++) { %>

  <h2><%= books[i].title %></h2>

<% } %>
```

<br>
<hr>

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
<hr>

### Link Index to Show

```
<% for (var i=0; i < books.length; i++) { %>

  <h2><a href="/books/<%= i %>"><%= books[i].title %></a></h2>

<% } %>
```

<br>
<hr>

## Link show back to Index

```
<a href="/books">back to index</a>
```

<br>
<hr>

## Static files

```
app.use(express.static('public')
```

* Make a directory called `public` in the root directory.
* Make frontend files. For now, just make a `css` file, `style.css`.
* Link to them in the normal way from the .ejs files.

```
    <link rel="stylesheet" href="/style.css" media="screen" title="no title">
```

Write in some CSS to change the background color of the page



## Change data to include images


	
&#x1F535; **Activity (5 min)**



