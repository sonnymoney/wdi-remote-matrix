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

The `express_read_starter` code should just have the basic setup with Express and a root route.

<br>
<hr>

11:10

## DUMMY DATA (3 mins)

The primary reason for running a server is to work with data. Before we setup, connect, and write queries for a proper database (Mongo), we will go through the four top-level processes for working with data by using dummy data.

Dummy data is just data that is hard-coded into your app, and will reset when you stop the server. A proper database will preserve the data. 

<br>
<hr>

## CRUD (5 mins)

The four fundamentals actions we perform with data are represented in the acronym **CRUD**

* CREATE
* READ
* UPDATE
* DELETE

&#x1F535; **Ask**

1. What is CRUD?
2. Are there any other basic operations we could perform on our data?


Today we will go over Read and look at a design pattern for reading data.

<br>
<hr>

11:15

## SET UP DUMMY DATA 

In our server environments, the primary data structures that we will passing around are **objects**. To set up our **object** data, we put them in an array which will serve as our dummy database.

Resource:

&#x1F535; **Watch (3 mins)**

Write in dummy data after dependencies and before routes:

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

&#x1F535; **Activity (5 mins)**

Write in the books dummy data after dependencies and before routes.

Make it an **array of objects**.

Each object should be a single book. Write in three books.

Make sure each book has a `title` and `author`.

11:23

## Routing for the resource

Route for the Books resource. We will send the entire books array to our page:

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

&#x1F535; **Activity (4 mins)**

Write a route for the URI `/books` and send the books array to the page.

&#x1F535; **Activity (4 mins)**

Download JSON View for Chrome to nicely format the JSON data as it appears on your page.

<br>
<hr>

11:31


## RESTFul Routes (7 mins)

The route that we have made is for **READ**ing data. A route that reads _all_ the data for a particular resource is called an _index_ route.

This is a small part of a design pattern for amking routes that deal with the basic CRUD actions. The design pattern is called RESTFul routing.

RESTFul routes are a design pattern for laying out our routes. There are seven of them:

* Index
* Show
* New
* Create
* Edit
* Update
* Destroy

In a standard app with full CRUD capability, we would use all seven routes. 

For now, we will use two routes for **READING** data:

* **Index**: display every entry for a particular resource. For example, in a store app, you can see a bunch of products and browse them.

* **Show**: display just one of a particular resource. For example, when you click on a product on the index page, you will be taken to a page that just shows you the product you clicked on. 

<br>
<hr>

11:38

## INDEX

Review (1 min):

Display all of data within a for resource.

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

11:39

## SHOW

A _show_ route is the second and final RESTFul route that we use for **READ**ing data. We use it just to display a single item from our resource.


&#x1F535; **Demonstrate (5 mins)**

Beans, Bones, Bins app. Why we have a show route.

11:43

### Routing for a single resource

Display just one item from the array of data using params. With the `:id` parameter, we can input a number into the browser and access a single item by its index position in our array.

```
// SHOW Route
app.get('/books/:id', function(req, res) {
  res.send(books[req.params.id]);
});
```

11:48

&#x1F535; **Activity (5 mins)**

Write in a show route that will display a single item from your books resource.

Example: If the user inputs `/books/0` into the url bar, they will be sent a page JSON for the book that resides at index 0 within the books array. 

<br>
<hr>

11:53

## Module.exports (9 mins)

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
12:02

&#x1F535; **Activity (9 mins)**

* Create a `books.js` file in the root directory
* Cut your dummy data from `server.js` and paste it into `books.js`
* Rename your data to `module.exports`. This will export the data.
* Use `require` to load your data into `server.js`

12:11 | Break until 12:21

<br>
<hr>
License
<hr>



