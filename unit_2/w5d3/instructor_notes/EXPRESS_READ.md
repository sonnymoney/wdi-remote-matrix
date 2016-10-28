![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

<hr>
Title: Express - Read<br>
Type: Lesson<br>
Duration: 2.5hrs <br>
Creator: Thom Page<br>
Topics: Dummy data, READ, Index and Show, module.exports <br>
<hr>

# EXPRESS - READ

### Lesson Objectives
_After this lesson, students will be able to:_

- Set up dummy data
- Use JSON for reading dummy data
- Create routes for Index and Show (RESTFul routing)
- Use module.exports to compartmentalize dummy data

<hr>

&#x1F535; **Setup (10 min)**

* `git pull upstream master`
* In `student_examples` for today, navigate to `express_read_starter`
* `npm install` to install the dependencies listed within package.json
* Run the server and go to `localhost:3000` in the browser

<br>
<hr>

## DUMMY DATA

The primary reason for running a server is to work with data. Before we setup, connect, and write queries for a proper database (Mongo), we will go through the four top-level processes for working with data by using dummy data.

Dummy data is just data that is hard-coded into your app, and will reset when you stop the server. A proper database will preserve the data. 

<br>
<hr>

## CRUD

The four fundamentals actions we perform with data are represented in the acronym **CRUD**

* CREATE
* READ
* UPDATE
* DELETE

Today we will go over Read and look at a design pattern for reading data.

<br>
<hr>

## SET UP DUMMY DATA 

Arrays of objects are the primary data structure used in our servers.

Resource:

```
// DUMMY DATA
var books = [
  {
    title: "Tender is the Night",
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Too Much Happiness",
    author: "Alice Munro"
  },
  {
    title: "Pilgrim at Tinker Creek",
    author: "Annie Dillard"
  }
];
```

Route for the Books resource:

```
app.get('/books', function(req, res) {
  res.send(books);
});
```

<br>
<hr>

### JSON

When we use Objects for storing / displaying data, it's called JSON.

JSON View:

https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc

<br>
<hr>

## RESTFul Routes

RESTFul routes are a design pattern for laying out our routes. There are seven of them:

* Index
* Show
* New
* Create
* Edit
* Update
* Destroy

In a standard app with full CRUD capability, we would use all seven routes. For now, we will use two routes for **READING** data:

* **Index**: display every entry for a particular resource. For example, in a store app, you can see a bunch of products and browse them.

* **Show**: display just one of a particular resource. For example, when you click on a product on the index page, you will be taken to a page that just shows you the product you clicked on. 

<br>
<hr>

## INDEX

Display the JSON of all data
Multiple of the same resource -- Array of Objects

```
// DUMMY DATA
var books = [
  {
    title: "Tender is the Night",
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Too Much Happiness",
    author: "Alice Munro"
  },
  {
    title: "Pilgrim at Tinker Creek",
    author: "Annie Dillard"
  }
];
```

```
// INDEX Route
app.get('/books', function(req, res) {
  res.send(books);
});
```

<br>
<hr>

## SHOW

Display just one item from the array of data using params. With the `:id` parameter, we can input a number into the browser and access a single item by its index position in our array.


### A single resource

```
// SHOW Route
app.get('/books/:id', function(req, res) {
  res.send(books[req.params.id]);
});
```

<br>
<hr>

## Module.exports

Right now our data is just sitting in our `server.js`. We can compartmentalize our code and keep our dummy data separate from the other workings of the app. This is called _separation of concerns_.

To pass files around, we can use `module.exports`.

First, create a file where the data will live. 
In the root directory, make a `books.js`.

![](https://i.imgur.com/JA1BIyb.png)

Cut and past your books array into `books.js`.
We use `module.exports` to specify what will be the output of this file. Instead of calling the array `books`, export it using `module.exports`:

In books.js

```
// DUMMY DATA
module.exports = [
  {
    title: "Tender is the Night",
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Too Much Happiness",
    author: "Alice Munro"
  },
  {
    title: "Pilgrim at Tinker Creek",
    author: "Annie Dillard"
  }
];
```

We can import the output of books.js into our server code with `require`:

server.js

```
var books = require('./books.js');
```

<br>
<hr>
License
<hr>



